import React, { useState } from 'react';
import logo from '../assets/logo.png';
import {Menu, X} from 'lucide-react'

export default function Navbar() {



  return (
        

<nav class="bg-black  border-b border-white border-opacity-70 shadow-lg shadow-white/40 dark:bg-black sticky top-0 z-50 text-blue">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 text-blue">
    <a href="" class="flex items-center space-x-3 rtl:space-x-reverse">
      <img src={logo} class="h-10" alt="Flowbite Logo" />
      <span class="self-center text-2xl font-semibold whitespace-nowrap text-blue-700 ">DJS Compute</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white dark:text-white dark:hover:bg-gray-800 dark:focus:ring-white" aria-controls="navbar-default" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
      </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-white rounded-lg bg-black md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-black">
        <li>
          <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-500 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-white rounded-sm hover:bg-gray-800 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 dark:text-white md:dark:hover:text-blue-500">About</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-white rounded-sm hover:bg-gray-800 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 dark:text-white md:dark:hover:text-blue-500">The Team</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-white rounded-sm hover:bg-gray-800 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 dark:text-white md:dark:hover:text-blue-500">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


    )
}
