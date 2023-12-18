"use client"
import Head from 'next/head';
import React, { useEffect } from 'react';

const Todo = () => {
  useEffect(() => {
    // Use functions or objects from the external script
    externalScriptFunction();
  }, []);

  return (
  <>
    <div>
      <Head>
        <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.3.5/dist/alpine.min.js" defer></script>
         <script>

    function app() {

      return {

        showSettingsPage: false,

        openModal: false,

        username: '',

        bannerImage: '',

        colors: [{

            label: '#3182ce',

            value: 'blue'

          },

          {

            label: '#38a169',

            value: 'green'

          },

          {

            label: '#805ad5',

            value: 'purple'

          },

          {

            label: '#e53e3e',

            value: 'red'

          },

          {

            label: '#dd6b20',

            value: 'orange'

          },

          {

            label: '#5a67d8',

            value: 'indigo'

          },

          {

            label: '#319795',

            value: 'teal'

          },

          {

            label: '#718096',

            value: 'gray'

          },

          {

            label: '#d69e2e',

            value: 'yellow'

          }

        ],

        colorSelected: {

          label: '#3182ce',

          value: 'blue'

        },

        dateDisplay: 'toDateString',

        boards: [

          'Todo',

          'In Progress',

          'Review',

          'Done'

        ],

        task: {

          name: '',

          boardName: '',

          date: new Date()

        },

        editTask: {},

        tasks: [],

        formatDateDisplay(date) {

          if (this.dateDisplay === 'toDateString') return new Date(date).toDateString();

          if (this.dateDisplay === 'toLocaleDateString') return new Date(date).toLocaleDateString('en-GB');

          return new Date().toLocaleDateString('en-GB');

        },

        showModal(board) {

          this.task.boardName = board;

          this.openModal = true;

          setTimeout(() => this.$refs.taskName.focus(), 200);

        },

        saveEditTask(task) {

          if (task.name == '') return;

          let taskIndex = this.tasks.findIndex(t => t.uuid === task.uuid);

          this.tasks[taskIndex].name = task.name;

          this.tasks[taskIndex].date = new Date();

          this.tasks[taskIndex].edit = false;

          // Get the existing data

          let existing = JSON.parse(localStorage.getItem('TG-tasks'));

          // Add new data to localStorage Array

          existing[taskIndex].name = task.name;

          existing[taskIndex].date = new Date();

          existing[taskIndex].edit = false;

          // Save back to localStorage

          localStorage.setItem('TG-tasks', JSON.stringify(existing));

          this.dispatchCustomEvents('flash', 'Task detail updated');

        },

        getTasks() {

          // Get Default Settings

          const themeFromLocalStorage = JSON.parse(localStorage.getItem('TG-theme'));

          this.dateDisplay = localStorage.getItem('TG-dateDisplay') || 'toLocaleDateString';

          this.username = localStorage.getItem('TG-username') || '';

          this.bannerImage = localStorage.getItem('TG-bannerImage') || '';

          this.colorSelected = themeFromLocalStorage || {

            label: '#3182ce',

            value: 'blue'

          };

          if (localStorage.getItem('TG-tasks')) {

            const tasksFromLocalStorage = JSON.parse(localStorage.getItem('TG-tasks'));

            this.tasks = tasksFromLocalStorage.map(t => {

              return {

                id: t.id,

                uuid: t.uuid,

                name: t.name,

                status: t.status,

                boardName: t.boardName,

                date: t.date,

                edit: false

              }

            });

          } else {

            this.tasks = [];

          }

        },

        addTask() {

          if (this.task.name == '') return;

          // data to save

          const taskData = {

            uuid: this.generateUUID(),

            name: this.task.name,

            status: 'pending',

            boardName: this.task.boardName,

            date: new Date()

          };

          // Save to localStorage

          this.saveDataToLocalStorage(taskData, 'TG-tasks');

          // Refetch all tasks

          this.getTasks();

          // Show Flash message

          this.dispatchCustomEvents('flash', 'New task added');

          // Reset the form

          this.task.name = '';

          this.task.boardName = '';

          // close the modal

          this.openModal = false;

        },

        saveSettings() {

          // data to save

          const theme = JSON.stringify(this.colorSelected);

          // Save to localStorage

          localStorage.setItem('TG-username', this.username);

          localStorage.setItem('TG-theme', theme);

          localStorage.setItem('TG-bannerImage', this.bannerImage);

          localStorage.setItem('TG-dateDisplay', this.dateDisplay);

          // Show Flash message

          this.dispatchCustomEvents('flash', 'Settings updated');

          // Back to Main Page

          this.showSettingsPage = false;

        },

        onDragStart(event, uuid) {

          event.dataTransfer.setData('text/plain', uuid);

          event.target.classList.add('opacity-5');

        },

        onDragOver(event) {

          event.preventDefault();

          return false;

        },

        onDragEnter(event) {

          event.target.classList.add('bg-gray-200');

        },

        onDragLeave(event) {

          event.target.classList.remove('bg-gray-200');

        },

        onDrop(event, boardName) {

          event.stopPropagation(); // Stops some browsers from redirecting.

          event.preventDefault();

          event.target.classList.remove('bg-gray-200');

          // console.log('Dropped', this);

          const id = event.dataTransfer.getData('text');

          const draggableElement = document.getElementById(id);

          const dropzone = event.target;

          dropzone.appendChild(draggableElement);

          // Update

          // Get the existing data

          let existing = JSON.parse(localStorage.getItem('TG-tasks'));

          let taskIndex = existing.findIndex(t => t.uuid === id);

          // Add new data to localStorage Array

          existing[taskIndex].boardName = boardName;

          existing[taskIndex].date = new Date();

          // Save back to localStorage

          localStorage.setItem('TG-tasks', JSON.stringify(existing));

          // Get Updated Tasks

          this.getTasks();

          // Show flash message

          this.dispatchCustomEvents('flash', 'Task moved to ' + boardName);

          event.dataTransfer.clearData();

        },

        saveDataToLocalStorage(data, keyName) {

          var a = [];

          // Parse the serialized data back into an aray of objects

          a = JSON.parse(localStorage.getItem(keyName)) || [];

          // Push the new data (whether it be an object or anything else) onto the array

          a.push(data);

          // Re-serialize the array back into a string and store it in localStorage

          localStorage.setItem(keyName, JSON.stringify(a));

        },

        generateUUID() {

          return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {

            var r = Math.random() * 16 | 0,

              v = c == 'x' ? r : (r & 0x3 | 0x8);

            return v.toString(16);

          });

        },

        dispatchCustomEvents(eventName, message) {

          let customEvent = new CustomEvent(eventName, {

            detail: {

              message: message

            }

          });

          window.dispatchEvent(customEvent);

        },

        greetText() {

          var d = new Date();

          var time = d.getHours();

          // From: https://1loc.dev/ (Uppercase the first character of each word in a string)

          const uppercaseWords = str => str.split(' ').map(w => `${w.charAt(0).toUpperCase()}${w.slice(1)}`).join(' ');

          let name = localStorage.getItem('TG-username') || '';

          if (time < 12) {

            return "Good morning, " + uppercaseWords(name);

          } else if (time < 17) {

            return "Good afternoon, " + uppercaseWords(name);

          } else {

            return "Good evening, " + uppercaseWords(name);

          }

        },

      }

    }

  </script>

      </Head>
<div> <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" /> <style dangerouslySetInnerHTML={{__html: "\n\t\t[x-cloak] {\n\t\t\tdisplay: none;\n\t\t}body{width:100%;\n height:auto;}\n\t\t\n\t\t.form-radio {\n\t\t\t-webkit-appearance: none;\n\t\t\t-moz-appearance: none;\n\t\t\tappearance: none;\n\t\t\t-webkit-print-color-adjust: exact;\n\t\t\tcolor-adjust: exact;\n\t\t\tdisplay: inline-block;\n\t\t\tvertical-align: middle;\n\t\t\tbackground-origin: border-box;\n\t\t\t-webkit-user-select: none;\n\t\t\t-moz-user-select: none;\n\t\t\t-ms-user-select: none;\n\t\t\tuser-select: none;\n\t\t\tflex-shrink: 0;\n\t\t\tcolor: currentColor;\n\t\t\tbackground-color: #fff;\n\t\t\tborder-color: #f8f8f8;\n\t\t\tborder-width: 1px;\n\t\t\theight: 1.4em;\n\t\t\twidth: 1.4em;\n\t\t}\n\n\t\t.form-radio {\n\t\t\tborder-radius: 50%;\n\t\t}\n\n\t\t.form-radio:checked {\n\t\t\tbackground-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e\");\n\t\t\tborder-color: transparent;\n\t\t\tbackground-color: currentColor;\n\t\t\tbackground-size: 100% 100%;\n\t\t\tbackground-position: center;\n\t\t\tbackground-repeat: no-repeat;\n\t\t}\n\t" }} /> {/* Alert Box */} <div className="fixed w-full z-50 flex inset-0 items-start justify-center pointer-events-none md:mt-5" x-data="{ 			message: '', 			showFlashMessage(event) { 				this.message = event.detail.message; 				setTimeout(() => this.message = '', 3000) 			} 		}"> <template x-on:flash.window="showFlashMessage(event)" /> <template x-if="message" /> </div> {/* /Alert Box */} <div x-data="app()" x-init="getTasks()" x-cloak className="flex flex-col min-h-screen border-t-8" :class="`border-${colorSelected.value}-700`"> <div className="flex-1"> {/* Header */} <div className="bg-cover bg-center bg-no-repeat" :class="`bg-${colorSelected.value}-900`" :style="`background-image: url(${bannerImage})`"> <div className="container mx-auto px-4 pt-4 md:pt-10 pb-40" /> </div> {/* /Header */} <div className="container mx-auto px-4 py-4 -mt-40"> {/* Welcome Page */} <div x-show="!localStorage.getItem('TG-username')"> <h2 className="font-bold text-blue-400 text-center text-3xl">Welcome to Tasksgram</h2> <h2 className="text-gray-400 text-center mb-8 text-lg">Simple Kanban Board</h2> <div className="bg-white rounded-lg p-6 md:p-10 md:max-w-md mx-auto shadow-md"> <label className="text-gray-800 block mb-1 font-bold text-sm tracking-wide">Name</label> <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" type="text" x-model="username" placeholder="Enter your name and hit enter..." @keydown.enter="if (username == '') { return; } localStorage.setItem('TG-username', username); username = ''" /> </div> </div> {/* Settings Page */} <div x-show.immediate="showSettingsPage == true"> <div x-show.transition="showSettingsPage == true"> <div className="mb-8"> <a href="#" @click.prevent="showSettingsPage = false" className="rounded-lg text-sm px-3 py-2 inline-flex" :class="`text-${colorSelected.value}-500 bg-${colorSelected.value}-800 hover:bg-${colorSelected.value}-700`">← Go Back</a> </div> <div className="p-6 bg-white rounded-lg shadow-md md:max-w-4xl" style={{"min-height":"150px"}}> <h2 className="font-bold text-gray-800 mb-3 text-2xl">Settings</h2> <div className="mb-5"> <label className="text-gray-800 block mb-1 font-bold text-sm">Name</label> <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-full md:w-64 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" type="text" x-model="username" placeholder="Enter your name" /> </div> <div className="mb-5"> <div className="flex items-center"> <div> <label htmlFor="colorSelected" className="text-gray-800 block font-bold mb-1 text-sm">Select a theme</label> <div className="px-1"> <div className="flex flex-wrap -mx-2"> <template x-for="(color, index) in colors" :key="index" /> </div> </div> </div> </div> </div> <div className="mb-5"> <label className="text-gray-800 block mb-1 font-bold text-sm">Banner image <small className="text-gray-500 text-xs">(optional)</small></label> <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-full md:w-1/2 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" type="url" x-model="bannerImage" placeholder="eg. https://picsum.photos/1200/400?random=2" /> </div> <div className="mb-5"> <label className="text-gray-800 block mb-1 font-bold text-sm">Date format display</label> <div className="flex"> <label className="flex justify-start items-center text-truncate rounded-lg bg-gray-200 pl-4 pr-6 py-2 shadow-xs mr-4"> <div className="mr-3" :class="`text-${colorSelected.value}-600`"> <input type="radio" x-model="dateDisplay" defaultValue="toDateString" className="form-radio focus:outline-none focus:shadow-outline" /> </div> <div className="select-none text-gray-700">Thu May 28 2020</div> </label> <label className="flex justify-start items-center text-truncate rounded-lg bg-gray-200 pl-4 pr-6 py-2 shadow-xs mr-4"> <div className="mr-3" :class="`text-${colorSelected.value}-600`"> <input type="radio" x-model="dateDisplay" defaultValue="toLocaleDateString" className="form-radio focus:outline-none focus:shadow-outline" /> </div> <div className="select-none text-gray-700">28/05/2020</div> </label> </div> </div> <div className="mt-8"> <button type="button" className="bg-white hover:bg-gray-100 text-gray-700 font-semibold py-2 px-4 border border-gray-300 rounded-lg shadow-xs mr-2" @click="showSettingsPage = false"> Cancel </button> <button type="button" @click="saveSettings" className="text-white font-semibold py-2 px-4 border border-transparent rounded-lg shadow-xs" :class="`bg-${colorSelected.value}-700 hover:bg-${colorSelected.value}-800`"> Save Settings </button> </div> </div> </div> </div> {/* Main Page */} <div x-show.immediate="localStorage.getItem('TG-username') && showSettingsPage == false"> <div x-show.transition="localStorage.getItem('TG-username') && showSettingsPage == false"> {/* Greetings */} <div className="flex justify-between items-center mb-2"> <div> <h1 className="text-xl md:text-2xl text-gray-300 font-semibold" x-text="greetText()" /> <div x-text="formatDateDisplay(new Date())" className="text-sm" :class="`text-${colorSelected.value}-400`" /> </div> <div> <a @click.prevent="showSettingsPage = !showSettingsPage" href="#" className="rounded-lg px-3 py-2 font-medium inline-flex items-center" :class="`text-${colorSelected.value}-500 bg-${colorSelected.value}-800 hover:bg-${colorSelected.value}-700`"> <svg className="w-5 h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /> </svg> Settings</a> </div> </div> {/* /Greetings */} {/* Kanban Board */} <div className="py-4 md:py-8"> <div className="flex -mx-4 block overflow-x-auto pb-2"> <template x-for="board in boards" :key="board" /> </div> </div> {/* /Kanban Board */} </div> </div> {/* /Main Page */} </div> </div> {/* Footer */} <div className="container mx-auto px-4 py-10"> Made with </div> {/* /Footer */} {/* Modal */} <div className="fixed inset-0 flex h-screen w-full items-end md:items-center justify-center z-10" x-show.transition.opacity="openModal"> <div className="absolute inset-0 bg-black opacity-50" /> <div className="md:p-4 md:max-w-lg mx-auto w-full flex-1 relative overflow-hidden"> <div className="md:shadow absolute right-0 top-0 w-10 h-10 rounded-full bg-white text-gray-500 hover:text-gray-800 inline-flex items-center justify-center cursor-pointer" x-on:click="openModal = !openModal"> <svg className="fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z" /> </svg> </div> <div className="w-full rounded-t-lg md:rounded-lg bg-white p-8"> <h2 className="font-bold text-2xl mb-6 text-gray-800">Task Details for <span className="leading-normal border-b-2" :class="`text-${colorSelected.value}-600 border-${colorSelected.value}-200`" x-text="task.boardName" /></h2> <div className="mb-4"> <label className="text-gray-800 block mb-1 font-bold text-sm">Task Name</label> <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" type="text" x-model="task.name" x-ref="taskName" autofocus @keydown.enter="addTask()" /> </div> <div className="mt-8 text-right"> <button type="button" className="bg-white hover:bg-gray-100 text-gray-700 font-semibold py-2 px-4 border border-gray-300 rounded-lg shadow-sm mr-2" @click="openModal = !openModal"> Cancel </button> <button type="button" className="text-white font-semibold py-2 px-4 border border-transparent rounded-lg shadow-sm" @click="addTask()" :class="`bg-${colorSelected.value}-700 hover:bg-${colorSelected.value}-800`"> Save Task </button> </div> </div> </div> </div> {/* /Modal */} </div> </div>
    
    </div>
    </>
  );
};

export default Todo;
