
May 22, 2022 

https://media.ccc.de/v/GLT18_-_321_-_en_-_g_ap147_004_-_201804281550_-_the_advantages_of_file_name_conventions_and_tagging_-_karl_voit#t=81

## Personal Information Management

### Filetags

<aside>
ℹ️ appends and removes tags to and from filenames

</aside>

- DEMO
    
    !https://github.com/novoid/filetags/raw/master/bin/screencast.gif
    

Source: https://github.com/novoid/filetags

- cli
- python3 based

### Controlled Vocabulary

<aside>
ℹ️ Fixed set of terms to avoid ambiguity

</aside>

We use cv for tags list to avoid similar terms for the same thing. Makes it easier to tag things both for tagging and retrieval of information. 

In Filetags we define tags as a cv in `.filetags`.

- one tag per line
- add `#donotsuggest` in front of a tag, if they are not supposed to be suggested ;-)
- mutually exclusive tags are written on one line, like `winter summer spring autumn` or `final draft`

### File Name Convention

Why?

- support refinding stuff

![[Pasted image 20230614012155.png]]
