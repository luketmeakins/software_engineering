# Software_Engineering
My Proposal:

Frequently in my workplace, we need to compare reported values to ensure that our aggregated data reconciles and that we will not be publishing any discrepancies. All of our reported values by our reporting firms are expected to be submitted as the pound sterling values even if the respective value was the position of a foreign currency instrument such as the Danish crown (DKK). One of our job responsibilities is to query abnormal reported positions, so for example, perhaps Bank A has reported an abnormally large position of 100mn pounds in bonds. We might receive a response to this from Bank A providing us business reasons for the 860mn DKK movement.  

Therefore, this position can only be deemed possible if we are able to confirm that the currency conversation aligns. Naturally, my business area sends hundreds of such queries out for each month, this means that manually checking the conversion rate is not feasible and incredibly time consuming. Therefore, I have proposed the following currency converter tool that can be used to easily convert any currency to and from the pound sterling. 

Design and Prototype: 

The design of the currency convertor tool should be accessible, effective and simple. This is due to the tool being primarily used as a workplace tool to improve the current outdated process of manually converting the currencies. Therefore, the tool must be minimal with a basic user interface that requires minimal input. 

To create my basic prototype, I have used figma to present what the finalised product could likely be. This design effectively uses a single output page which features several interactive features. These include, switching the convertor to and from pound sterling. An input position for the value to be converted and a dropdown selection for the main currencies. The design uses a clear exchange rate which is highlighted by a dark blue box - which follows my workplace colour palette. The design also outputs the dates the exchange rates are correct as of - which is pivotal for any audit purposes. 






Plan:

For my project, I will be using modern agile principles for the project management aspect of the project. Specifically, I will be using the kanban methodology which is a method of managing software development. (Popova, 2019). To implement this, I used the kanban board feature found within the github project page. 

Within this project page, a dedicated project board was set up and consists of various stages. The backlog, Ready, in progress, In review and done. All aspects of the project would be implemented here and each stage would recognise a different meaning. For example, an item being in review would mean that this item is waiting for sign off from a senior member. 

Using this board ensures that all team members and stakeholders would be aware of the current progress and be able to identify if any aspects require further support. 



Requirements and Tickets: 

To ensure the smoothness of the project completion, using detailed well split tickets ensures that each independent task is able to be developed together. Using labels such as the priority and type of ticket ensures that all knowledge and expectations are well documented. 

My feature tickets were created for the key requirements needed for the successful completion of the currency convertor project. For example, identifying the key currencies would be its own respective ticket. I have also added in a bug ticket example, which can be used to document any bugs or errors that are identified during the natural progression of the project. 

All tickets were given a priority ranking and added to the kanban project board allowing for seamless movements across each stage from backlog to done whilst ensuring that no progress is lost. 



Build the MVP:

For my Minimum Viable Product for the currency convertor tool, I took a structured simple approach where I incrementally added the next aspect. This meant that I would be able to ensure that the core business need was met. Effectively, the MVP just had to provide a simple yet reliable tool to convert foreign currencies into the pound sterling. 

I started the process of building the underlying code of the MVP by first creating a new repository. Within this, I set out a clear reproducible structure to ensure the simplicity is maintained. The three core files were, the user interface, styling for the UI and then the logic for the app. This ensured that the key parts were separate from one another so any bugs or future issues can be more readily resolved. 

Now that the structural aspect of the project had been set, I set about creating and committing the base contents of the respective files. The first was my user interface which uses HTML output along with CSS. This simple interface includes a box for a value to be inputted, a list to choose which currency to be converted from, a button to convert the value and lastly an output area for the new value. It must be noted that at this stage the tool was non-functional in the case that any future steps would result in a change in the design. 

After this I added a styles file to compliment the user interface. I then set about designing the underlying logic for my converter tool. I used javascript to do this and split the app into two key parts. The first was the mathematical logic and the second was the app logic which was the base app to be used within the already designed user interface. The mathematical part was solely to ensure that the validation of any user inputted values would not impact the remaining sections of the code. Lastly, the basic app logic within the javascript, combined the files to make the app as well as using an API for the external exchange rate. 

Test Driven Development: 

Test Driven Development (TDD) was used to test and ensure that the key logic of the tool was correct. The main underlying aspects of the currency converter tool is to reliably convert currencies to the pound sterling so this logic was what was tested. I decided to perform three separate unit tests which were: correctly converted to pound sterling, expected error for negative amount and lastly, expected error when the exchange rate is 0.



To do this, I used a Continuous integration (CI) pipeline within the github actions section. This means that with every new push/pull that occurs to the project, all tests are re-run which means that any bugs or errors can be quickly and efficiently identified. Originally. The test failed due to basic module compatibility issues but after a quick change to my code the check automatically ran and successfully completed.






Overall, the use of TDD and CI is an effortless way to maintain code quality due to github automatically re-running the tests when the underlying code is changed. This method naturally reduces operational risk as all future changes can be made with human confidence that any issues will be easily known if the test fails. 

New features:

Now that I had the base design and underlying structure as well as an automatic testing system, I was able to add new features to my project. These features were, converting from pound sterling rather than just to pound sterling and then adding a date to confirm when the exchange rates were correct as of.  

Each new feature was originally added as a new issue onto the kanban board and was then implemented by creating a new feature branch which meant that I could make and test the changes in isolation with no impact on my main project. 

The first feature along with the test, was similar to the original code but defined a new test. Effectively going from pound rather to pound - this was relatively simple but as I had not originally included the new import the test failed. It cleared once the import was corrected. The second feature was to create a date and ensure that it outputted correctly, this test passed the first time so I therefore merged the two new features to the original project and completed the tickets on the kanban board. 




User and Technical Documentation:
User: 

The currency converter tool is a workplace tool that is designed to be simple and effective for broad workplace use that requires minimal user input. The application is simple to use and requires the user to select a currency from the dropdown menu and then input the value. The user then needs to click convert. The tool will then output the new value of the respective currency. 

The tool also uses basic input validation to ensure that the tool is reliable and any errors are identified early. For example, if the user inputs a negative number, the output will be ‘invalid input’. This means that the tool is more reliable for trustworthiness and more beneficial for any future audit purposes. 




Technical:

The currency converter tool is built using technically standard applications. It uses HTML for the UI structure, the CSS for styling and javascript for the base logic used for the tool. The overall project is split into a usable structure with the UI being in index.html, styling in styles.css and then the conversion logic is split into separate javascript files found within the src directory. 

Due to the simplicity of the base logic used within the javascript files, there are several independent unit tests that are to be automatically run with any new push/pull to the project. The outcomes of these tests can be found within the actions tab within the github project. 

To run the application you should create a new codespace and then input python -m http.server into the terminal which will open up the convertor tool. The project can also be cloned or downloaded. 

Tickets:
 
A simple ticket system was used throughout this project by a kanban board found within github issues. Each key feature was recorded as its own feature ticket and when applicable a dedicated branch was created as well as dedicated bug tickets when errors occurred. Tickets were moved across the kanban board until they were closed to portray a clear status of the project. In my kanban board there are some further enhancements currently outstanding. 




Evaluation: 

Overall, the currency converter tool along with the border project management of the assignment has met the primary objectives set out of proving a simple and efficient method to convert currencies. This was achieved by using simple logic across well structured files which had been well tested using several frequently running unit tests. Due to this underlying logic and structure, the tool is easy to maintain and there are several further enhancements that can be easily added into the project to further improve the tool. As seen in the outstanding tickets. 

The project easily navigates through a well structured github project and uses a kanban board to provide a neat centralised area to document the steps taken to design the project including any bugs as well as the future enhancements that can be made. The automated github actions test which runs with every new push/pull that occurs in the project ensures that the workplace business area can be confident that the tool is reliable and if broken, any fixes can be easily identified and made. 

With this being said, the tool itself does have several limitations. The integration of a live exchange rate API was unfortunately unsuccessful which means that the code will need users to pre- input the exchange rate as it was for the end of the previous business month (which is when we collect the data.) I have also added further enhancement tickets to the kanban board such as identifying key currencies and creating a percentage match for reconciliation purposes. 

To conclude, the currency converter tool project represents a strong base for the app with accessible and easy structure and allows for the potential of any future enhancements to be made. 

References:

Popova, O., 2019. Adaptation of flexible project management models based on Scrum and Kanban technologies. Technology audit and production reserves, 4(2 (48)), pp.4-10.

