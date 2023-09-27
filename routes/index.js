const express = require('express');
const router = express.Router();
const passport = require('passport');

// Controller Setup
const homeController = require('../controller/homeControl');
const userController = require('../controller/userControl');

// Fetching the other router
const userRoutes = require('./user');

// User Signing and signout viewpoint
router.get('./', homeController.renderHomePage);
router.get('./signin', homeController.renderSignInPage);
router.get('./signout', homeController.renderSignOutPage);
router.get('./create-company', homeController.renderCreateCompanyPage);


// The routes for form submisson 
router.post('./create-compant', userController.createCompany);