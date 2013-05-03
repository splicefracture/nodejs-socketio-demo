nodejs-socketio-demo
====================

Demo using NodeJS and Socket.io



Dependencies:
===========
<code>socket.io</code>- Websockets<br/>
<code>forever</code>- Run your app in the background


Installation :
========
Make sure you have NodeJS on your server.<br/>
<a href="http://nodejs.org/download/">NodeJS Download Page</a>
<br/><br/>
Install package manager <br/>
<code>sudo apt-get install npm</code>
<br/><br/>
Install all the dependencies in the same directory as the package.json file<br/>
<code>
npm install
</code>

** Make sure forever is installed in global scope **<br/><br/>
The node server is running on localhost on port 3000.
Change this to your server if you want to.Make sure you are allowing traffic on this port.<br/>

Run:
====
Feel free to change around the log file paths, but make sure they are absolute
<br/><code>
forever start -l run.log -o out.log -e err.log demo.js
</code>

Stop:
====
<code>
forever stop demo.js
</code>
