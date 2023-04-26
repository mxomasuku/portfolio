---
title: useEffect vs Loaders from 'react-router-dom'
author: Mxo Masuku
date: 25 April 2023
---

# useEffect vs Loaders from 'react-router-dom'

'

## What are they for?

The useEffect hook is React's go-to guy for loading and fetching data from APIs. However, if you have noticed, most people dislike it. (

## Loaders

are for loading data into a component before it renders.

are put outside the component, at the bottom?



The loader is created as an async function which must be exported to the component. 



```react
export const postLoader = async () => {
    const res = await fetch(' http://localhost:4000/ProjectsDb')

    console.log(res)

    return res.json
}

```





**Where should this function be located?** 

*{If you think you are going to create many of these, then you have the option of creating a directory named Loaders, or anything you like and add all your Loaders.js files with your Loader functions there. The key thing is adding it to the route.}*

 **How do you add it to the route?**

```react
<Route index element={<Writing/>} 	loader={postLoader}/>
```



## Step 3

Go to the component you want to render the content on and 

import a hook from 'react-router-dom' called useLoaderData

```react
import {useLoaderData} from "react-router-dom"

const post = useLoaderData()

```

The post variable will be an array which you can map, loop over and render. 



## How is this better than the useEffect hook? Coz frankly it seems like a lot of work.

​	
