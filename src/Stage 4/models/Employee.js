import React, { Component } from 'react';

export default class Employee {
  // constructor
  constructor(id, name, phone, title) {
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.title = title;
  }

   updateName(str){
      this.name = str;
    }

    updatePhone(str){
      this.phone = str;
    }

    updateTitle(str){
      this.title = str;
    }



  // updateName

  // updatePhone

  // updateTitle
}