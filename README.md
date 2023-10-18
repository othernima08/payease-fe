# PayEase

![PayEase Logo](./src/assets/login-image/phone.png)


## Overview

PayEase is a user-friendly e-wallet application that enables quick and secure digital transactions. It allows users to easily transfer money and top up their accounts, providing a seamless and efficient payment experience.

## Demo

The PayEase application is already deployed and can be accessed at:
[PayEase Demo](https://payease-demo-app.com)

## Table of Contents

- [Collaborators](#colaborators)
- [Library](#library)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Demo](#demo)

## Collaborators
- Angga Kahaerul (anggakahaerul.)
- Desi Christine Othernima Pakpahan (othernima08)
- Trisna Bayu Permadi (Trisnabayuuu.)
- Yopi Junita Ambarita (yopijunita)


## Library
-  Personalization
    - sweatalert2
    - react-icons
    - font-awesome
    - bootstrap
    - bootstrap-icons
    - react-bootstrap
    - react-responsive
-  Custom Input
    - react-chartjs-2
    - rect-nice-dates
    - react-number-format
    - Date.fns
    - react-pin-input
-  Data Management
    - react-router
    - react-router-dom
    - axios
-  PDF Generator
    - html2canvas
    - js.pdf

## Features

- Register and create pin
- Login and forgot password
- Dashboard 
    - Display income, expense graph
    - Transaction history notification
- Profile
    - Edit profile picture
    - Change pin
    - Change password
    - Display personal information
    - Add & manage phone number
- Transfer
    - Input amount transfer
    - Transfer details & pin confirmation
    - Transfer status
    - Download transfer status pdf
- Top Up
    - Input amount top up
    - Payment method
    - Payment code
    - Payment point
    - Top Up history
- Transaction history
    - Display transaction history by this week adn this month
    - Change password
    - Filter transaction history categories
    - Filter transaction by date

## Getting Started

Before you begin, ensure you have met the following requirements:

- Web browser (e.g., Chrome, Firefox) to view the frontend.
- Code editor for running/ edit the frontend.

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/othernima08/payease-fe.git

2. Navigate to the project folder:

   ```sh
   cd payease-fe

3. Open the index.html file in your web browser to preview the first page of payease frontend.

## Usage

1. To access the Payease, navigate to the URL ```http://localhost:5173/```
2. To create a new account, open the registration page using the URL ```http://localhost:5173/register```
3. Create a new pin to your account, open the URL ```http://localhost:5173/pin-confirm```
4. To display a success message create pin, navigate to the URL ```http://localhost:5173/pin-success```
5. For logging into your account, access the login page via the URL ```http://localhost:5173/login```
6. To verify the account, access the login page via the URL ```http://localhost:5173/otp```
7. To reset your password, access the reset password page at  ```http://localhost:5173/reset-password```
8. To create a password with a token, go to the URL  ```http://localhost:5173/create-password/:token```
9. If login is successfull navigate to main dashboard, open the URL ```http://localhost:5173/home```
10. To manage your profile, go to the URL ```http://localhost:5173/profile```
11. To view your profile information, go to the URL ```http://localhost:5173/profile/profile-information```
12. To add a phone number to your profile, go to the URL ```http://localhost:5173/profile/add-phone```
13. To manage phone numbers, go to the URL ```http://localhost:5173/profile/manage-phone```
14. To change your password, open the URL ```http://localhost:5173/profile/change-password```
15. To change your first PIN, open ```http://localhost:5173/profile/change-pin-1``` 
16. To change your second PIN, access ```http://localhost:5173/profile/change-pin-2```
17. To initiate a transfer, go to ```http://localhost:5173/transfer/receiver```
18. To input the transfer amount, use ```http://localhost:5173/transfer/to/:id```
19. To confirm the transfer, open  ```http://localhost:5173/transfer/confirmation```
20. To check the transfer status, visit ```http://localhost:5173/transfer/status/:id```
21. To view a PDF file, visit ```http://localhost:5173/receipt/testpdf```
24. To input the top-up amount, open  ```http://localhost:5173/top-up/input-amount```
25. To choose a payment method, access ```http://localhost:5173/top-up/payment-method```
23. To view the payment code, access ```http://localhost:5173/top-up/payment-code```
26. To view the top-up history,```http://localhost:5173/top-up/history```
27. To make a payment at a payment point, open ```http://localhost:5173/payment-point```
28. To view the transaction history, go to ```http://localhost:5173/home/history```
29. To view notifications, access ```http://localhost:5173/home/notification```






