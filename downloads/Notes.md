## Reason for custom mos.exe
On Windows machines, uploading js files from the project tab of the web UI
would fail to work as it did not correctly deal with backslashes in pathnames.
This was a problem purely with the client-side JS, and as we had trouble cross
compiling the source for Windows it was decided to patch the existing binary.
Fortunately this was a simple change with the relevant code being stored as
text.

Depending on how long it takes to figure out how to build the tool to test
another change, this fix will eventually be submitted to the main repository
for everyone to benefit from.
