
#  Temperature Converter

Though this app could have been built using vanilla JavaScript, I used React because I believe that building scalable applications is a great approach. React is flexible and can be used on a variety of platforms. 

For styling, I used Styled-Components because of its Theme Provider as I wanted to complete the dark/light mode option. The theme is automatically applied depending on the users set preference on their computer. If your computers theme is set to dark, the dark theme will be default when the application loads. 

I also like keeping styles contained within the component that is using it. This also helps with scalability. I could have created the styles as a JavaScript object and then pass it to the components, but I believe in code being readable and easy for someone else to jump in. Since Styled-Components syntax looks a lot like CSS, it would be easier for someone else to jump in.

I used React-Switch for the dark/light mode toggle simply because of its customizability. 

The large emoji that is rendered depends on the temperature entered. I thought this would bring a little fun to something that could be considered mundane.  

There is also error handling for the temperature inputs. If something other than a number is entered, an error will be displayed.  

The structure of the application is pretty simple. The theme file is contained within the `src` folder and the components used are in the `components` folder. `App.js` imports the components and the theme is set on the Styled-Components `ThemeProvider`. 
  
  

##  Available Scripts

  

In the project directory, you can run:

  

###  `npm start`

  

Runs the app in the development mode.\

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

  

###  `npm run build`

  

Builds the app for production to the `build` folder.\

It correctly bundles React in production mode and optimizes the build for the best performance.

  

The build is minified and the filenames include the hashes.\