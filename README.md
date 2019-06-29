# Fast Travel Stocks

# Summary
Fast Travel Stocks is an application allowing users to research specific video game publishers for stock, news, and game information. The application leverages APIs to gather information on a publisher's library of games, recent news, and stock price. Users can also vote on whether they would invest in a certain publisher or not.

## Tech Stack
Fast Travel Stocks uses a Node.js backend alongside Sequelize.js in order to utilize a JawsDB. The frontend is built using the Reactjs library, with styling done using the Material-UI react library. The frontend takes advantage of a number of APIs in order to display the proper data for the selected publisher.

### Stocks Graph
The stocks graph was designed using the CanvasJS library and Alphavantage API. When selecting a publisher, a request is pulled from Alphavantage to graph the closing stock price from each week from the publisher's IPO reveal to the current day. Users can traverse on the graph to see what the price of the stock was on a given week. The user can also click and drag anywhere on the graph in order to zoom in, for a more in-depth look within a given period of time. The user is able to reset the graph using a refresh button that appears in the top-righthand corner of the graph.

### Games Card
The Games card grabs the publisher's library using the IDGB API. Information provided includes the release date, and title. Users can use this information to pinpoint on the graph adjustments to stock price changes after certain release dates

### News Card
The News card grabs the ten most recent articles and displays them as individual items within the card. Each list item contains a short description of the article, and allows the user to click a link to allow them to view the article itself.

### Stock Poll
The user is prompted on whether they would invest in a selected publisher, or not. After making a choice, the user is presented with statistical information on who else said yes or no on investing in a certain stock.
