
#  Temperature Converter

## About


Though this app could have been built using vanilla JavaScript or another framework, but I used React. I believe that building scalable applications is a great approach. React is a JavaScript framework that allows you to build scalable single page applications quickly. It is flexible and can be used on a variety of platforms. 

For styling, I used Styled-Components because of its Theme Provider as I wanted to complete the dark/light mode option. The theme is automatically applied depending on the users set preference on their computer. If your computers theme is set to dark, the dark theme will be default when the application loads. 

I also like keeping styles contained within the component that is using it. This also helps with scalability. I could have created the styles as a JavaScript object and then pass it to the components, but I believe in code being readable and easy for someone else to jump in. Since Styled-Components syntax looks a lot like CSS, it would be easier for someone else to jump in.

I used React-Switch for the dark/light mode toggle simply because of its customizability.  

The structure of the application is pretty simple. The theme file is contained within the `src` folder and the components used are in the `components` folder. `App.js` imports the components and the theme is set on the Styled-Components `ThemeProvider` component. This allows the other components to use the theme. 

Using the app is easy. All you do is enter a temperature in on of the two input fields and it converts it to the other temperature scale automatically.

The large emoji that is rendered depends on the temperature entered. I thought this would bring a little fun to something that could be considered mundane.  

There is also error handling for the temperature inputs. If something other than a number is entered, an error will be displayed. You can also clear the error message by clicking the reset button or by entering a new temperature.

To toggle the dark/light mode, click the switch in the top right corner.
  
  

##  Available Scripts

  

In the project directory, you can run:

  

###  `npm install`



This will install all the required dependencies.



###  `npm start`

  

Runs the app in the development mode.\

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

  

###  `npm run build`

  

Builds the app for production to the `build` folder.\
