# eCommerce
This is my repository for an online ski shop.

The app is live on [fly.io](https://ecommercefa.fly.dev/)

This is a full-stack application developed to practice .NET integrations.
You can create account, add items to basket and make a purchase to these items.
Note that this is a FAKE store. You cannot actually make purchases.
The application uses demo version of Stripe so no real money will be handled.
You can use 4242 4242 4242 4242 as a valid card to test the functionality.

## This app features
- [x] React frontend
- [x] .NET 6 backend.
- [x] Postgresql as database.
- [x] Stripe to handle FAKE payments.
- [x] Redux to handle frontend states.
- [x] React-hook-form to handle forms.
- [x] MUI for styling
- [x] JWT for authentication

## Prerequisites
- .NET
- Visual studio / Visual studio code
- Docker

## To run this app:

- Launch docker desktop
- Navigate to the API folder and run dotnet watch run.
- Then navigate to the Client folder, install dependencies by running npm install and finally run npm start.
- The app will be live on http://localhost:3000
