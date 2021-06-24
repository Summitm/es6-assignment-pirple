const addAlarmBtn = document.getElementById("addAlarm");
const alarmForm = document.getElementById("setAlarm");

const alarmNote = alarmForm.querySelector("#alarmTitle");
const alarmTime = alarmForm.querySelector("#alarmTime");
const alarmDate = alarmForm.querySelector("#alarmDate");

const alarm_list = document.querySelector("#alarm-lists");

let alarms = [];

addAlarmBtn.addEventListener("click", (event) => {

    event.preventDefault();

    let isPermissionGranted = Notification.permission;

    switch(isPermissionGranted) {
        case "granted":
            console.log("Proceed and show notifications");
            break;
        case "default":
            Notification.requestPermission()
                .then(() => {
                    console.log(isPermissionGranted);
                })
                .catch((error) => {
                    console.log(error);
                });
            break;
        default:
            console.log("Nothing is to be done!");
    }

    createAlarm();

}, {once:true, passive:false});

function createAlarm() {
    // console.log(`title: ${alarmNote.value} \ndate: ${alarmDate.value} \ntime: ${alarmTime.value}`);

    let alarmList = localStorage.getItem("alarms");

    const alarm = {
        Id: ~~((Math.random() * 10) + 1),
        note: alarmNote.value,
        time: alarmTime.value.toLocaleString(),
        date: alarmDate.value.toLocaleString(),
        isExecuted: false
    }
//    console.log(`${alarmTime.value.toLocaleString()} and date is ${alarmDate.value.toLocaleString()}`);

    alarms.push(alarm);
    saveAlarm(alarms);
}

function saveAlarm(createdAlarm) {
    localStorage.setItem("alarms", JSON.stringify(createdAlarm));
    displayAlarms(createdAlarm);
}

function displayAlarms(allAlarms) {
    alarm_list.innerHTML = "";

    allAlarms.forEach(alarmInList => {
        const isCompleted = alarmInList.isExecuted ? 'checked' : '';
        const li = document.createElement("li");
        li.setAttribute('class', 'task');
        li.id = alarmInList.Id;

        li.innerHTML = `<div class='row'>
                            <div class='col-sm-4'><input type="checkbox" ${isCompleted}>
                            ${alarmInList.note}</div>
                            <div class='col-sm-4'>(rings at:${alarmInList.time} ${alarmInList.date})</div>
                            <div class='col-sm-4'></i></div>
                        </div><i class="bi bi-trash delete"></i>`;
        if(alarmInList.isExecuted) {
            li.classList.add(isCompleted);
        }


        alarm_list.appendChild(li);
    });
}

function autoFetchAlarms() {
    const existingAlarms = localStorage.getItem('alarms');
    if(existingAlarms) {
        alarms = JSON.parse(existingAlarms);
        displayAlarms(alarms);
    }
}

autoFetchAlarms();

function deleteTask(id) {
    alarms = alarms.filter((alarmInList)=>{
        if(alarmInList.isExecuted !== true) {
            return alarmInList.Id != id;
        }
    });

    saveAlarm(alarms);
}

alarm_list.addEventListener('click', (event) => {
    if(event.target.classList.contains('delete')) {
        deleteTask(event.target.parentElement.getAttribute('id'));
    }
})

// function ringAlarm(alamList) {
    
// }

setInterval(() => {
    alarms.forEach((alarm) => {
        let getDate = new Date(alarm.date).toLocaleDateString();
        let getTime = alarm.time;

        const currentLocalDate = new Date().toLocaleDateString('en-US');
        const currentLocalTime = new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: false });
        // console.log(`${getDate} vs ${currentLocalDate}`);
        // console.log(`${getTime} vs ${currentLocalTime}`);
        if(getDate == currentLocalDate && getTime == currentLocalTime) {
            var alarmClockIcon = '<i class="bi bi-alarm"></i>';
            var createNotif = new Notification(alarm.note, {body:"riiing riiing!", icon:alarmClockIcon});
            if(createNotif) {
                console.log("Alarm is ringing!");
                alarm.isExecuted = true;
                saveAlarm(alarms);
            }
        }
        else {
            // do nothing
        }
    })
},60000);
// navigator.permissions.revoke({name: 'notifications'});