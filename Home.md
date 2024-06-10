---
obsidianUIMode: preview
---


Some background: [[Meta PKM]]
>[!Map]+  Atlas
> > *Work with ideas*
>
>
> - [[Unsorted notes]] and [[Output]]
> 
> > *Access the knowledge*
> 
>  - To add new content, hit `Shift-Cmd-n`
>
>
> > [!network] Collections: [[Maps]] | [[People]] | [[Books]] | [[Literature]] | [[Clippings]]
> 

> [!Calendar]- Calendar
> >What's on your mind?*[](Books.md)To journal, focus your day, or to capture a spark, hit `Shift-Cmd-d`
> 
> - To add a thought to [[Idea Log]] or *Daily Notes*, hit `Shift-Cmd-c` 
>
>   
> 
>   
> 
>   
> > [!network] Collections: [[Meetings]]

> [!Training]- Efforts
> > What can you work on?* 
> 
> Quickly prioritize your [[Efforts]] and budget your bandwidth. 
> 
> 
> > [!Box]+ 🔥 On
> >```dataview
> > TABLE WITHOUT ID
>  > file.link as "",
>  > rank as "Rank"
> > FROM "Efforts/On"
> > SORT rank desc
> > ```
> 
> > [!Box]+ ♻️ Ongoing
> > ``` dataview
> > TABLE WITHOUT ID
> > file.link as "",
> > rank as "Rank"
> > FROM "Efforts/Ongoing"
> > SORT rank desc
> > ```
> 
> > [!Box]-  〰️ Simmering
> > Efforts can easily move from `on` to `simmering` in the background.
> > 
> > ``` dataview
> > TABLE WITHOUT ID
> > file.link as "",
> > rank as "Rank"
> > FROM "Efforts/Simmering"
> > SORT rank desc
> > ```
> 
