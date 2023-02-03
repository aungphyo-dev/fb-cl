import './style.scss';
import * as bootstrap from 'bootstrap';
export let userbox = document.querySelector('#user-group');
export let postGroup = document.querySelector('.post-group');


export const Users = [
    {
        name:'Honey',
        image:'./images/1.jpg'
    },
    {
        name:'Honey Nway Oo',
        image:'./images/2.jpg'
    },
    {
        name:'Honey Yourk Kyar',
        image:'./images/3.jpg'
    },
    {
        name:'Typle',
        image:'./images/4.jpg'
    },
    {
        name:'Mg Mg',
        image:'./images/5.jpg'
    },
    {
        name:'Ko Ko',
        image:'./images/6.jpg'
    },
    {
        name:'Nyi Nyi',
        image:'./images/7.jpg'
    },
    {
        name:'Luffy',
        image:'./images/lf1.jpg'
    },
    {
        name:'Luffy2',
        image:'./images/lf2.jpg'
    },
    {
        name:'Luffy3',
        image:'./images/lf3.jpg'
    },
    {
        name:'Luffy4',
        image:'./images/lf4.jpg'
    },
    {
        name:'Luffy5',
        image:'./images/lf5.jpg'
    }
];

Users.forEach(function (user){
    let div = document.createElement('div');
    div.innerHTML=`
         <a href="#" class="list-group-item border-0 py-3">
            <div class='d-flex justify-content-start align-items-center'>
              <img src="${user.image}" class="d-block pf-img  rounded-circle" alt="">
              <p class="mb-0 ms-3 pe-none fw-bold small">${user.name}</p>
            </div>
         </a>
    `
    userbox.append(div)
})