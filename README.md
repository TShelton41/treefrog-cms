# Treefrog CMS

This is a CMS created with Firebase and jQuery. We are just showing how to create a very simple CMS that will update a site's navigation and update the page content.

This is just the base HTML for the project. You will be creating the rest.

## Steps to turn this into a Firebase project

You need to plan your application you are creating and if you are going to include Firebase create a base project folder and then do all of this first before you start coding your project. It is easier, and also remember to put all of your files that you create for your application in the public folder that is created. So put your css, lib, app etc. in the public folder.

1. Create an app in the Firebase console on the web.

2. Enable Firestore as the database. Make sure you check start mode. Also, enable Google Auth in the authentication link on the left-hand side.

3. Load Firebase CLI Tools:

<pre><code>npm -g install firebase-tools</code></pre>

4. Verify:

<pre><code>firebase --version</code></pre>

5. Login and authorize Firebase:

<pre><code>firebase login</code></pre>

6. Create project then run:

<pre><code>firebase init</code></pre>

7. Associate with your project:

<pre><code>firebase use --add</code></pre>

8. Setup for local hosting:

<pre><code>firebase serve --only hosting</code></pre>

9. Bring in all the scripts for Firebase. You probably already have some. If you created the project before hand they are in the index.html file that was created by running

<pre><code>firebase init</code></pre>

10. If you are using sass make sure you have your package.json path for sass changed to public/sass

11. Deploy to Firebase:

<pre><code>firebase deploy --except functions</code></pre>
