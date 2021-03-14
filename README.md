<h1 class="code-line" data-line-start=0 data-line-end=1 ><a id="TLDR_of_the_Internet_0"></a>TLDR of the Internet</h1>
<h2 class="code-line" data-line-start=1 data-line-end=2 ><a id="Sumarizes_the_internet_in_a_shortest_way_possible_1"></a>Sumarizes the internet in a shortest way possible</h2>
<p class="has-line-data" data-line-start="3" data-line-end="4"><a href="https://travis-ci.org/joemccann/dillinger"><img src="https://travis-ci.org/joemccann/dillinger.svg?branch=master" alt="Build Status"></a></p>
<p class="has-line-data" data-line-start="5" data-line-end="6">URL : <a href="https://tldroftheinternet.herokuapp.com/">https://tldroftheinternet.herokuapp.com/</a></p>
<h2 class="code-line" data-line-start=6 data-line-end=7 ><a id="Features_6"></a>Features</h2>
<ul>
<li class="has-line-data" data-line-start="8" data-line-end="9">PWA</li>
<li class="has-line-data" data-line-start="9" data-line-end="10">Available on Android,IOS and Windows</li>
<li class="has-line-data" data-line-start="10" data-line-end="11">Scrappers used are IP BAN Proof</li>
<li class="has-line-data" data-line-start="11" data-line-end="12">SSL Certified</li>
<li class="has-line-data" data-line-start="12" data-line-end="13">Scalable Architecture</li>
<li class="has-line-data" data-line-start="13" data-line-end="15">Responsive</li>
</ul>
<h2 class="code-line" data-line-start=15 data-line-end=16 ><a id="Architecture_15"></a>Architecture</h2>
<p class="has-line-data" data-line-start="16" data-line-end="17"><img src="https://raw.githubusercontent.com/hksahil/TLDR-for-the-Internet/8b2584605345796418711b504d75f06874447b39/Frontend/front-end/src/images/1.jpg" alt="alt text"></p>
<h2 class="code-line" data-line-start=18 data-line-end=19 ><a id="Tech_Used_18"></a>Tech Used</h2>
<p class="has-line-data" data-line-start="20" data-line-end="21">TLDR uses a number of libraries/frameworks to work properly:</p>
<ul>
<li class="has-line-data" data-line-start="22" data-line-end="23">[HTML/CSS] - For Markup</li>
<li class="has-line-data" data-line-start="23" data-line-end="24">[React] - Frontend</li>
<li class="has-line-data" data-line-start="24" data-line-end="25">[Node/Express] - Backend</li>
<li class="has-line-data" data-line-start="25" data-line-end="26">[MongoDB] - Database</li>
<li class="has-line-data" data-line-start="26" data-line-end="27">[Cheerio] - Scrapper</li>
<li class="has-line-data" data-line-start="27" data-line-end="28">[Node-scheduler] - CRON JOBS</li>
</ul>
<h2 class="code-line" data-line-start=30 data-line-end=31 ><a id="Installation_30"></a>Installation</h2>
<p class="has-line-data" data-line-start="32" data-line-end="33">TLDR requires <a href="https://nodejs.org/">Node.js</a> env to run.</p>
<p class="has-line-data" data-line-start="34" data-line-end="35">Install the dependencies and devDependencies and start the server.</p>
<pre><code class="has-line-data" data-line-start="37" data-line-end="40" class="language-sh">For frontend:
npm run start
</code></pre>
<pre><code class="has-line-data" data-line-start="41" data-line-end="45" class="language-sh">For Backend:
npm run start
or node index
</code></pre>
<p class="has-line-data" data-line-start="45" data-line-end="46"><code>NOTE : Replace envs with your own credentials</code></p>
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
<h3 class="code-line" data-line-start=54 data-line-end=55 ><a id="Ports_Used_54"></a>Ports Used</h3>
<pre><code class="has-line-data" data-line-start="57" data-line-end="61" class="language-sh">Frontend : http://localhost:<span class="hljs-number">3000</span>
Backend : http://localhost:<span class="hljs-number">8000</span>
After using proxy ( frontend ) : Combined to http://localhost:<span class="hljs-number">8000</span>
</code></pre>
<p class="has-line-data" data-line-start="62" data-line-end="63">For production environments…</p>
<pre><code class="has-line-data" data-line-start="65" data-line-end="67" class="language-sh">NODE_ENV=production
</code></pre>
