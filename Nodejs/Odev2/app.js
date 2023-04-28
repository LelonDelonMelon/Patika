const posts = [{
    title: "Deneme Post 1",
    author: "Deneme Author 1"
},

{
    title: "Deneme Post 2",
    author: "Deneme Author 2"
},
{
    title: "Deneme Post 3",
    author: "Deneme Author 3"
}]


const postsToString = () => {

    posts.map((value, idx) => {
        console.log(`Post with id ${idx} is ${value.author} ${value.title}`)
    })
}

const createPost = (data) => {
    const promise = new Promise((resolve, reject) => {

        const postData = data;
        if (postData) {
            posts.push(postData);
            resolve();
        }
        else {
            reject();
        }
    })

    return promise;
}

const createPostThenList = async () => {

    await createPost({ title: "Deneme Title 444", author: "Deneme Author 444", }).then(
        console.log("Successfully added"),
        postsToString()

    ).catch((err) => {
        console.log(err)
    })

}

createPostThenList();
