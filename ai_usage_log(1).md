# AI Usage Log

## Interaction 1

### User

Asked for help getting a Lab 3 HTML profile page to appear through the
professor-provided Practice1 link on the KU EECS website.

### Assistant Summary

Explained that the professor's existing link pointed to `practice1.html`
in the user's `public_html` directory and helped identify the expected
server location as `~/public_html/practice1.html`. The assistant also
helped distinguish between the KU server and the user's local WSL
environment.

## Interaction 2

### User

Reported that the Practice1 page was showing "The Python Profilers"
instead of the intended profile page.

### Assistant Summary

Helped diagnose that an unrelated Python documentation `profile.html`
file had been uploaded/used. The assistant had the user inspect
`practice1.html` with `grep` and found both the Python documentation
content and the intended profile content. The assistant recommended
replacing the contents of `practice1.html` with the intended HTML.

## Interaction 3

### User

Asked how to push edits to the website after editing the HTML.

### Assistant Summary

Explained the difference between editing a local file and editing the
copy on the KU server. Suggested testing the change by replacing the
heading with `TEST 123` and checking the server copy with:
`grep "<h1>" ~/public_html/practice1.html`. When the change did not
appear, the assistant helped determine that VS Code was editing a
different copy of the file.

## Interaction 4

### User

Provided the VS Code path:
`/home/baylie.stith/.vscode-server/Lab3/practice1.html`.

### Assistant Summary

Explained that this was the local Lab 3 copy and initially suggested
using `scp` to upload it to:
`b656s769@cycle3.eecs.ku.edu:~/public_html/practice1.html`.

When the path was not found from the server, the assistant helped
determine that the terminal was currently on `cycle3`, not the local
laptop.

## Interaction 5

### User

Showed that the terminal was on: `b656s769@cycle3:~/public_html` and
displayed the contents of `public_html`.

### Assistant Summary

Explained that the user was already logged into the KU server. Suggested
either editing `/home/b656s769/public_html/practice1.html` directly with
`nano`, or configuring VS Code to connect to `cycle3` using Remote -
SSH. The user chose to work toward using VS Code with the server.

## Interaction 6

### User

Asked whether the CSS file also needed to be uploaded.

### Assistant Summary

Explained that because the HTML contained:
`<link rel="stylesheet" href="style.css">`, the CSS file needed to be
available in `public_html`. Helped locate the local CSS file and upload
it to the server.

## Interaction 7

### User

Asked about a video that would not play on the website.

### Assistant Summary

Explained that a local video file needed to be uploaded to `public_html`
if the HTML referenced it as a local file. Helped locate the video in
the Windows Downloads directory and upload it to the server as
`video.mp4`. Suggested using:

``` html
<video controls>
    <source src="video.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
```

## Interaction 8

### User

Asked whether the profile photo also needed to be uploaded.

### Assistant Summary

Explained that a local image must be uploaded if the HTML references a
local image filename. Helped locate `PXL_20220524_205837974-scaled.jpeg`
and upload it as `profile.jpeg`, with the corresponding HTML:

``` html
<img class="avatar" src="profile.jpeg" alt="Profile photo">
```

## Interaction 9

### User

Asked how to upload the other Lab 3 practice files so the professor's
existing links would open them.

### Assistant Summary

Explained that the professor's links could use the expected filenames
without changing the professor's `index.html`. Helped upload: -
`practice1.html` - `practice2.html` - `practice3.html` - `practice4.php`

to `~/public_html`.

## Interaction 10

### User

Reported an `scp` error while uploading the practice files.

### Assistant Summary

Identified that the local path for `practice2.html` had accidentally
been duplicated in the command. Corrected the command so each file used
the proper path:
`/home/baylie.stith/.vscode-server/Lab3/practice2.html`,
`practice3.html`, and `practice4.php`.

## Interaction 11

### User

Asked whether the rest of the Lab 3 files could be uploaded while
excluding the practice files.

### Assistant Summary

Helped inspect the Lab3 folder and identify the additional files: -
`fontcon.js` - `font.css` - `style.css` - `verify.css` - `verify.js`

Provided an `scp` command to upload those files without uploading the
practice files again.

## Interaction 12

### User

Reported that the PHP file was not showing on the website.

### Assistant Summary

Suggested checking whether `practice4.php` existed in `public_html` and
whether PHP could be executed on the server. Suggested commands
including: `ls -l ~/public_html/practice4.php`,
`php ~/public_html/practice4.php`, and
`head -20 ~/public_html/practice4.php`. The conversation moved to GitHub
before the PHP issue was fully resolved.

## Interaction 13

### User

Asked for help uploading the Lab 3 folder to GitHub.

### Assistant Summary

Explained how to initialize Git, connect the Lab3 folder to a GitHub
repository, add files, commit, and push. The user then specified that
the repository needed to be changed.

## Interaction 14

### User

Provided the new GitHub repository:
`git@github.com:Baylie-Stith/Lab-3.git`

### Assistant Summary

Provided commands to change the Git remote to the new `Lab-3`
repository, verify the remote, add the Lab 3 files, commit them, and
push to the `main` branch.

## Interaction 15

### User

Reported that `git add .` added many files that were not wanted.

### Assistant Summary

Explained that `git add .` adds everything under the repository root.
Helped inspect the repository and discovered that Git had been
initialized at: `/home/baylie.stith` instead of inside the Lab3 folder.

## Interaction 16

### User

Confirmed that `git rev-parse --show-toplevel` returned:
`/home/baylie.stith`.

### Assistant Summary

Explained that the Git repository was initialized too high in the
directory tree. Recommended removing the incorrectly placed `.git`
metadata from `/home/baylie.stith`, initializing Git inside:
`/home/baylie.stith/.vscode-server/Lab3`, and then connecting that
repository to `git@github.com:Baylie-Stith/Lab-3.git`.

## Interaction 17

### User

Reported that after reinitializing Git inside Lab3, `git status` showed
only the files they wanted.

### Assistant Summary

Confirmed that the repository was now scoped to Lab3 and explained how
to stage the files, check the staged list with `git status`, commit
them, and push them to GitHub.

## Interaction 18

### User

Provided an HTML page for a "CSS Font & Border Control" exercise. The
HTML referenced: `font-control.css` and `font-control.js`.

### Assistant Summary

Compared the filenames referenced by the HTML with the files previously
listed in the Lab3 directory. Noted that the HTML expected
`font-control.css` and `font-control.js`, while the directory contained
`font.css` and `fontcon.js`. Explained that the filenames need to match
and suggested either renaming the files or changing the HTML references,
depending on which files belong to the exercise.

## Interaction 19

### User

Uploaded the instructor's Gen-AI Log Guide and asked for the complete
`ai_usage_log.md` based on the Lab 3 conversation.

### Assistant Summary

Reviewed the uploaded guide. The guide states that the AI Usage Log
should document how AI was used during the lab, including questions,
debugging, failed attempts, misunderstandings, corrections, and
back-and-forth discussions. It requires the Markdown document to begin
with `# AI Usage Log` and use interaction sections with `User` and
`Assistant Summary` headings. It also states that the original AI
conversation should be kept available when generating the log.

The present document summarizes the Lab 3 interactions above in that
requested structure.
