---
up:
  - "[[Home]]"
related: 
created: 2024-05-29
tags:
  - map/view
---
This note collects all notes where the `in` property says `Maps`.

> [!planet]- Atlas Maps
> 
> > [!map]- Collections only
> > ```dataview
> > TABLE WITHOUT ID
> >  file.link as ""
> > 
> > WHERE
> >   contains(in,[[Collections]]) and
> >   !contains(file.name, "Template")
> > 
> > SORT file.name asc
> > ```
> 
> > [!map]- All Atlas maps
> > ```dataview
> > TABLE WITHOUT ID
> >  file.link as ""
> >  
> > FROM "Atlas/Maps" or "Atlas/Notes/Vaults/Ideaverse/Atlas/Maps"
> > 
> > SORT file.name asc
> > ```
> 
> > [!map]- Map "views"
> > These are maps that are more focused on auto-updating lists than for sensemaking.
> > ```dataview
> > TABLE WITHOUT ID
> >  file.link as "Map views"
> >  
> > FROM #map/view 
> > 
> > SORT file.name asc
> > ```
> 
> > [!map]- All the maps by folder
> > All the maps in the ideaverse with the tag `#map`
> > ```dataview
> > TABLE WITHOUT ID
> >  file.link as "",
> >  file.folder AS Folder
> >  
> > FROM #map 
> > 
> > SORT file.folder asc
> > ```

> [!calendar]- Calendar maps
> ```dataview
> TABLE WITHOUT ID
>  file.link as "Maps"
>  
> FROM "Calendar" and #map
> 
> SORT file.link asc
> ```

> [!training]- Effort maps
> ```dataview
> TABLE WITHOUT ID
>  file.link as "Maps"
>  
> FROM "Efforts" and #map
> 
> SORT file.name asc
> 
> ```