# Pure Math Club Website

This repository contains the files for the website of the University of Waterloo's **Pure Math Club**, 
otherwise known as **PMC** or the **PMAMCO** club.

Created by Marcus Chan (https://marcus-chan.me).

## For executives / editors of this website

I have made it easy for events and POWs to be added/modified.

#### Prerequisites

Before you can edit/modify this code, ensure you have the following installed:
- git
- npm
- node
- bash

This tutorial assumes you have a basic understanding of GitHub and Markdown.

### Events

Coming soon.

### POWs

To begin, open up a Terminal window and cd to the directory you wish to
host the project in.
Then, clone this repository onto your local system by running this command:
```
git clone https://github.com/mcpenguin/pmc-website.git
```
This will produce a copy of the project in your local system under the name ```pmc-website```.

Next, cd to the project folder:
```
cd pmc-website
```
Install the necessary node modules (this is required so you can preview how the website
will look like after you have made the changes):
```
npm install
```

To preview how the website will look like, you can run the command
```
npm start
```
The website will be hosted on **localhost:3000** in any browser of your choosing. Just make sure you are
not using Internet Explorer :p

#### Initializing a POW

To add a POW, run the command
```
npm run init-pow
```
This will initialize a directory at ```src/components/pows/pows/pow-X```, where X is the number of the
new POW. You will see it contains two files:
- ```config.json```, which contains *the name of the POW* and *the date the POW was added*; and
- ```content.md```, which will contain the content for the POW.

#### Editing a POW
You can now edit the fields in ```config.json``` accordingly and add the content for the POW in ```content.md```,
including the problem content, solution(s) and any additional notes. Since the content is written in Markdown,
it makes it easy to preview and modify how the content will look like. 

However, note that
- embedded images are currently not supported; and
- you can use the syntax !!...text...!! for spoiler tags.

For examples, you can refer to the other POWs in the other ```pow-X``` folders.
In addition, if so desired, you can also edit the content in thw ```content.md``` files.

#### Adding a POW cover image
Before we can "push" our POW to the website, you need to add a 'cover' image for the POW that will be
in the displayed as the 'image' representing the POW on the main POWs page, as well as the image displayed
on the top of the individual POW's page (which you can then reference in the POW if needed).

To do this, upload an image to the respective ```pow-X``` folder. You can rename it if you want;
my convention is to use the name 'title.(image type extension)').

#### Pushing the POW to the website
Once you are happy with the POW, we can push it to the website. To do this, run the command
```
npm run add-pow <number of the POW> <cover image name>
```
If you had named your image 'title.(image type extension)', you would put that in the cover image name.

#### Editing a POW
If you wish to edit the name, content or date of the POW after you have pushed it, you can modify
```content.md``` or ```config.json``` accordingly, and then run the command
```
npm run update-pow
```
The changes should appear on the website.

#### Saving your changes
Finally, you need to push your changes to the GitHub repository where the project is situated.