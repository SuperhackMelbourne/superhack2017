# Using the blank example project
1. Copy the whole folder (blank-example) into your mos projects folder
(this is usually under `.mos/apps-*version*` in your home folder, so it
might be a bit hard to find unless you've enabled hidden folders to be
shown - ask for help here if you need it)
2. Rename the blank-example folder to the new name of your app
3. Open the web interface for Mongoose OS, select Projects from the menu on
the left hand side of the page and you should see your newly added app (with
the name you chose earlier, or blank-example if you're lazy like me and didn't
change it)

That's it, you're now good to go! Some pointers for what to do next:
- Modify `mos.yml` to include your name and a useful description of what your
project will do
- Add your code to init.js, remembering to import any libraries you need
(for example, with `load('api_dotstar.js');`)

# Points to remember
The first time you want to install your new project onto the Tekt Board, you'll
need to click on the spanner ('Rebuild app firmware') and wait a minute or so,
followed by the lightning bolt ('Flash app firmware to device').

For future updates, if you've only changed `fs/init.js` then while that file
is shown on the screen you only need to click on the weird up arrow ('Save
file, copy to device, reboot device'). If you've changed any other file though
you will need to build and flash like the first time.
