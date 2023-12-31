// exclude-domains.js
function scanNode(s) {
    if (s.isInScope()) {
        // Define an array of domains to exclude
        var excludedDomains = [
            "http://172.17.0.1:https://owasp.org/www-project-webgoat/",
            "http://172.17.0.1:80",
            // Add more domains to exclude as needed
        ];

        // Check if the URL of the scanned node matches any of the excluded domains
        for (var i = 0; i < excludedDomains.length; i++) {
            if (s.url.startsWith(excludedDomains[i])) {
                s.setInScope(false);
                break; // Stop checking after excluding one domain
            }
        }
    }
}

function scan() {
    var sites = [];
    sites.push(OWASPZAP.getSiteByName("http://testphp.vulnweb.com/"));
    if (sites.length > 0) {
        for (var i = 0; i < sites.length; i++) {
            var site = sites[i];
            site.deleteAllUrls();
            site.includeInContext("Default Context");
            site.setIncludeInScope(true);
        }
    }
}
