ngboilerplate-advanced
======================

Based on the original ng-boilerplate by ngbp, this is a more up to date version, using angular 1.2.5, beautiful URLs and SEO ready, a more real world starter project with a demo backend.


Enabled links without #, need to place this in .htaccess

RewriteEngine on

# Don't rewrite files or directories
RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]

# Rewrite everything else to index.html to allow html5 state links
RewriteRule ^ index.html [L]