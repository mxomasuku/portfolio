const path = require('path')
const fs =  require('fs')

//How to grab the blog posts from the posts directory

const dirPath = path.join(__dirname, "../src/posts")
const dirPathPages = path.join(__dirname, "../src/Pages/content")
let postList = []
let pageList = []

const getPosts =  () => {
 fs.readdir(dirPath, (err, files) => {
        if(err) {
            return console.log('failed to read posts in posts folder' + err)
        }
   
    files.forEach((file, i) => {
            let obj = {}
            let post
            fs.readFile(`${dirPath}/${file}`, 'utf8', (err, posts) =>{

            const getMetaDataIndices = (acc, elem, i) =>{
                if(/^---/.test(elem)){
                    acc.push(i)
                }
                return acc
            }
            const parseMetaData = ({lines, metaDataIndices}) =>{
                if(metaDataIndices.length > 0) {
                    let metaData = lines.slice(metaDataIndices[0] + 1, metaDataIndices[1])
                    metaData.forEach(line => {
                        obj[line.split(": ")[0]] = line.split(": ")[1]
                    })
                  
                }
                return obj
            }
            const parseContent = ({lines, metaDataIndices}) =>{
                if(metaDataIndices.length > 0) {
                    lines = lines.slice(metaDataIndices[1] + 1, lines.length)
                    lines.length
            }
            return (lines.join("\n"))
        }
            const lines = posts.split("\n")
            const metaDataIndices = lines.reduce(getMetaDataIndices, [])
            const metaData = parseMetaData({lines, metaDataIndices})
            const content = parseContent({lines, metaDataIndices})
            const date = new Date(metaData.date)
            const timeStamp = date.getTime() / 1000
            console.log(timeStamp)
            post = {
                id: timeStamp,
                title: metaData.title ? metaData.title : "No title here",
                author: metaData.author ? metaData.author : "No author here",
                date: metaData.date ? metaData.date : "No date here",
                content: content ? content: "a blog post with no content"
            }
            postList.push(post)
            if(i === files.length - 1){
                const sortedList = postList.sort((a, b) =>{
                    return a.id < b.id ? 1 : -1
                })
               let data = JSON.stringify(sortedList)
               fs.writeFileSync('src/posts.json', data)
            }
            })
        });
    })
 return
}
const getPages =  () => {
    fs.readdir(dirPathPages, (err, files) => {
           if(err) {
               return console.log('failed to read posts in posts folder' + err)
           }
   
       files.forEach((file, i) => {
              
               let page
               fs.readFile(`${dirPathPages}/${file}`, 'utf8', (err,contents) =>{

               page = {
                        pageContent : contents
               }
               pageList.push(page)
            
                //    const sortedList = pageList.sort((a, b) =>{
                //        return a.id < b.id ? 1 : -1
                //    })
                  let data = JSON.stringify(pageList)
                  fs.writeFileSync('src/pages.json', data)
               
               })
           });
       })
    return
   }
getPosts()
getPages()