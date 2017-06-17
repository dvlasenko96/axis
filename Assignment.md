# Assignment

Your assignment is to implement a small single-page application (SPA), in
JavaScript, which displays sites and their devices.

Even though the assignment is small we would like you to imagine it as part of
a bigger application where you need to use good practices to ease scaling,
prevent regressions of bugs and keep a well formed code base. You should also
imagine that the project will be shared with a number of other developers which
need to understand the code to make changes and additions. Remember that you
are doing this to show us what you are good at, every little detail matters.

We would like the finished solution to at least be able to:

 * Display all the sites available to the account given to you
 * Allow interaction with sites to display additional information about the
   devices associated with each site

A site represents a collection of devices, typically based on a geographic
location. A device can represent a camera, video encoder, storage unit, etc.

The list of sites and devices will be available through the AVHS API. The API
documentation can be accessed from

  https://dev-api.avhs.axis.com/documentation.php

You will be given a username and password separately, which gives you access to
the documentation as well as authorization when making API calls.

Feel free to play around with the API using cURL:

  curl --data "api=JSON&a=retrieve&u=<username>&p=<password>" https://dev-api.avhs.axis.com/site.php
  curl --data "api=JSON&a=retrieve&deviceid[]=<deviceid>&u=<username>&p=<password>" https://dev-api.avhs.axis.com/device.php

You can use any tools to create the application but you should be prepared to
justify your choices.

We would appreciate it if you used git for version control but you're not
required to do so.

Last but not least, you need to send clear instructions on how the application
is started so that we can view the result.

If you have any questions about the assignment please don't hesitate to contact
Martin Lundberg, martin.lundberg@axis.com.

Good luck!

Team AVHS
