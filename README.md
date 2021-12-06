# house-manager
Fullstack app that helps you organize the documentation, service requirements, notes, etc for each appliance and feature of your house.

I currently have an overly-stuffed file of owner's manuals and notes on appliances and other features of my house.  These need to be saved for information such as model #, replacement part info, service info, etc.  A lost manual can be frustrating if you're unable to locate information online - especially if an item has been discontinued by the manufacturer.  Other systems in your house such as plumbing, sprinkler lines, garden designs have no manual, but as much information as you have can be very helpful to the next occupant of a home.  So why not keep track of these things in a program where you can create notes, attach links, photos, etc. for each system or appliance and the information can be kept digitally and neatly organized instead of a mish-mash of papers falling out of your file cabinet.  This is a digital house-manager.  

This app is currently being planned out - starting from scratch.  
It utilizes the CodeWorks "fullstack-vue" template.

Working on requirements for System Schema

Needs service - boolean - default = false
lastServiced - When boolean is switched from true to false, grab the Date.now and put it here
createdAt - but I think that comes automatically with the database - just like id.
Will want creatorId - as house changes hand, you can still know who installed something.
Want to have a spot for them to upload images?  How do I do that?  We have only done this by using URls, so how do I do the actual files?
