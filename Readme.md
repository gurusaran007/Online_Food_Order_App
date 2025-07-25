 # Three type of testing
         - Unit testing
         -Integeration Testing
         -End to End Testing(e2e)

 we will focus first 2 

 # Setting up testing in react application
    - Install react testing library
    -Install jest library
    -Install babel dependencies(in jest doc)
    -it will override parcel babel config so we will ask parcel to ignore our custom babel config now by creating .parcelrc 

    - Configure parcel config file to disable default babel transpilation
    -jest configuration (npx create-jest)
    -Install jsdom library(test case running envrionment)
    -Install @babel/preset-react - to make JSX work in test case
    -Include @babel/preset-react inside my babel config(convert jsx to html)
    -Install @testing-library/jest-dom (used for toBeIntheDocument)