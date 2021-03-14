<h1 class="code-line" data-line-start=0 data-line-end=1 ><a id="TLDR_of_the_Internet_0"></a>TLDR of the Internet</h1>
<h2 class="code-line" data-line-start=1 data-line-end=2 ><a id="Sumarizes_the_internet_in_a_shortest_way_possible_1"></a>Sumarizes the internet in a shortest way possible</h2>
<p class="has-line-data" data-line-start="3" data-line-end="4"><a href="https://travis-ci.org/joemccann/dillinger"><img src="https://travis-ci.org/joemccann/dillinger.svg?branch=master" alt="Build Status"></a></p>
<h2 class="code-line" data-line-start=5 data-line-end=6 ><a id="Features_5"></a>Features</h2>
<ul>
<li class="has-line-data" data-line-start="7" data-line-end="8">PWA</li>
<li class="has-line-data" data-line-start="8" data-line-end="9">Available on Android,IOS and Windows</li>
<li class="has-line-data" data-line-start="9" data-line-end="10">Scrappers used are IP BAN Proof</li>
<li class="has-line-data" data-line-start="10" data-line-end="11">Scalable Architecture</li>
<li class="has-line-data" data-line-start="11" data-line-end="13">Responsive</li>
</ul>
<h2 class="code-line" data-line-start=13 data-line-end=14 ><a id="Architecture_13"></a>Architecture</h2>
<p class="has-line-data" data-line-start="14" data-line-end="15"><img src="http://url/to/img.png" alt="alt text"></p>
<h2 class="code-line" data-line-start=16 data-line-end=17 ><a id="Tech_Used_16"></a>Tech Used</h2>
<p class="has-line-data" data-line-start="18" data-line-end="19">TLDR uses a number of libraries/frameworks to work properly:</p>
<ul>
<li class="has-line-data" data-line-start="20" data-line-end="21">[HTML/CSS] - For Markup</li>
<li class="has-line-data" data-line-start="21" data-line-end="22">[React] - Frontend</li>
<li class="has-line-data" data-line-start="22" data-line-end="23">[Node/Express] - Backend</li>
<li class="has-line-data" data-line-start="23" data-line-end="24">[MongoDB] - Database</li>
<li class="has-line-data" data-line-start="24" data-line-end="25">[Cheerio] - Scrapper</li>
<li class="has-line-data" data-line-start="25" data-line-end="26">[Node-scheduler] - CRON JOBS</li>
</ul>
<h2 class="code-line" data-line-start=28 data-line-end=29 ><a id="Installation_28"></a>Installation</h2>
<p class="has-line-data" data-line-start="30" data-line-end="31">TLDR requires <a href="https://nodejs.org/">Node.js</a> env to run.</p>
<p class="has-line-data" data-line-start="32" data-line-end="33">Install the dependencies and devDependencies and start the server.</p>
<pre><code class="has-line-data" data-line-start="35" data-line-end="38" class="language-sh">For frontend:
npm run start
</code></pre>
<pre><code class="has-line-data" data-line-start="39" data-line-end="43" class="language-sh">For Backend:
npm run start
or node index
</code></pre>
<p class="has-line-data" data-line-start="43" data-line-end="44"><code>NOTE : Replace envs with your own credentials</code></p>
<table class="table table-striped table-bordered">
<thead>
<tr>
<th>ENV KEY</th>
<th>VALUE</th>
</tr>
</thead>
<tbody>
<tr>
<td>DB_NAME</td>
<td>your mongoDB name</td>
</tr>
<tr>
<td>DB_USERNAME</td>
<td>username</td>
</tr>
<tr>
<td>DB_PASSWORD</td>
<td>password</td>
</tr>
<tr>
<td>NODE_ENV</td>
<td>development/production</td>
</tr>
<tr>
<td>PORT</td>
<td>8000</td>
</tr>
</tbody>
</table>
<p class="has-line-data" data-line-start="52" data-line-end="53">For production environments…</p>
<pre><code class="has-line-data" data-line-start="55" data-line-end="57" class="language-sh">NODE_ENV=production
</code></pre>
