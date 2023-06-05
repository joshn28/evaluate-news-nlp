# Evaluate a news article with Natural Language Processing

A web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites.

# Quickstart/Demo

# Table of Contents

- [Evaluate a news article with Natural Language Processing](#evaluate-a-news-article-with-natural-language-processing)
- [Quickstart/Demo](#quickstartdemo)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Dependencies](#dependencies)
- [Contribute](#contribute)
- [License](#license)

# Installation

In order to install the code, you can just clone this repo by using the code snippet below.

```
$ git clone git@github.com:joshn28/evaluate-news-nlp.git
```

# Usage

In order to use this project:

1. Obtain an API key from [MeaningCloud](https://www.meaningcloud.com/developer/sentiment-analysis), create an .env file and type in the following snippet with your API key into the file.

```
API_KEY=<api-key>
```

2. Find any news article or blog that interests you or that you would like to run Natural Language Processing (NLP) on.
3. Copy & paste it into the textbox and then click submit to view the sentiment analysis results.

# Development

## How to clone the project

```
# Clone repo
$ git clone git@github.com:joshn28/evaluate-news-nlp.git

# Change directory
$ cd evaluate-news-nlp

# Install dependencies
$ npm install
```

## How to run the project in development mode

```
# Run project in dev mode
$ npm run build-dev
```

## How to build the project and start using it

```
# Build project for production
$ npm run build-prod

# Run server
$ npm start
```

Open your web browser and type localhost:3000 into the address bar to access the application.

## How to run the tests for the project

```
# Run tests
$ npm test
```

[(Back to top)](#table-of-contents)

# Dependencies

- express
- body-parser
- cors
- dotenv

# Contribute

This is a personal project, no need to contribute.

# License

None.