<h1 class="code-line" data-line-start=0 data-line-end=1 ><a id="TLDR_of_the_Internet_0"></a>TLDR of the Internet</h1>
<h2 class="code-line" data-line-start=1 data-line-end=2 ><a id="Sumarizes_the_internet_in_a_shortest_way_possible_1"></a>Sumarizes the internet in a shortest way possible</h2>
<p class="has-line-data" data-line-start="3" data-line-end="4"><a href="https://travis-ci.org/joemccann/dillinger"><img src="https://travis-ci.org/joemccann/dillinger.svg?branch=master" alt="Build Status"></a></p>
<h2 class="code-line" data-line-start=5 data-line-end=6 ><a id="Features_5"></a>Features</h2>
<ul>
<li class="has-line-data" data-line-start="7" data-line-end="8">PWA</li>
<li class="has-line-data" data-line-start="8" data-line-end="9">Available on Android,IOS and Windows</li>
<li class="has-line-data" data-line-start="9" data-line-end="10">Scrappers used are IP BAN Proof</li>
<li class="has-line-data" data-line-start="10" data-line-end="11">SSL Certified</li>
<li class="has-line-data" data-line-start="11" data-line-end="12">Scalable Architecture</li>
<li class="has-line-data" data-line-start="12" data-line-end="14">Responsive</li>
</ul>
<h2 class="code-line" data-line-start=14 data-line-end=15 ><a id="Architecture_14"></a>Architecture</h2>
<p class="has-line-data" data-line-start="15" data-line-end="16"><img src="https://raw.githubusercontent.com/hksahil/TLDR-for-the-Internet/8b2584605345796418711b504d75f06874447b39/Frontend/front-end/src/images/1.jpg" alt="alt text"></p>
<h2 class="code-line" data-line-start=17 data-line-end=18 ><a id="Tech_Used_17"></a>Tech Used</h2>
<p class="has-line-data" data-line-start="19" data-line-end="20">TLDR uses a number of libraries/frameworks to work properly:</p>
<ul>
<li class="has-line-data" data-line-start="21" data-line-end="22">[HTML/CSS] - For Markup</li>
<li class="has-line-data" data-line-start="22" data-line-end="23">[React] - Frontend</li>
<li class="has-line-data" data-line-start="23" data-line-end="24">[Node/Express] - Backend</li>
<li class="has-line-data" data-line-start="24" data-line-end="25">[MongoDB] - Database</li>
<li class="has-line-data" data-line-start="25" data-line-end="26">[Cheerio] - Scrapper</li>
<li class="has-line-data" data-line-start="26" data-line-end="27">[Node-scheduler] - CRON JOBS</li>
</ul>
<h2 class="code-line" data-line-start=29 data-line-end=30 ><a id="Installation_29"></a>Installation</h2>
<p class="has-line-data" data-line-start="31" data-line-end="32">TLDR requires <a href="https://nodejs.org/">Node.js</a> env to run.</p>
<p class="has-line-data" data-line-start="33" data-line-end="34">Install the dependencies and devDependencies and start the server.</p>
<pre><code class="has-line-data" data-line-start="36" data-line-end="39" class="language-sh">For frontend:
npm run start
</code></pre>
<pre><code class="has-line-data" data-line-start="40" data-line-end="44" class="language-sh">For Backend:
npm run start
or node index
</code></pre>
<p class="has-line-data" data-line-start="44" data-line-end="45"><code>NOTE : Replace envs with your own credentials</code></p>
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
<h3 class="code-line" data-line-start=53 data-line-end=54 ><a id="Ports_Used_53"></a>Ports Used</h3>
<pre><code class="has-line-data" data-line-start="56" data-line-end="60" class="language-sh">Frontend : http://localhost:<span class="hljs-number">3000</span>
Backend : http://localhost:<span class="hljs-number">8000</span>
After using proxy ( frontend ) : Combined to http://localhost:<span class="hljs-number">8000</span>
</code></pre>
<p class="has-line-data" data-line-start="61" data-line-end="62">For production environments…</p>
<pre><code class="has-line-data" data-line-start="64" data-line-end="66" class="language-sh">NODE_ENV=production
</code></pre>
