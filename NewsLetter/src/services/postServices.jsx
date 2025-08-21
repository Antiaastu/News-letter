const API_BASE = import.meta.env.VITE_API_BASE

export const getAllPosts = async () => {
    const res = await fetch(`${API_BASE}/posts`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    
    const data = await res.json()
    console.log(data)
    if (!res.ok) {
        throw data
    }
    
    return data
}

export const likePost = async (postId, token) => {
    console.log("Liking post", postId, token)
    const res = await fetch(`${API_BASE}/posts/${postId}/like`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    })

    const data = await res.json()
    if (!res.ok){
        throw data
    }

    return data
}

export const unlikePost = async (postId, token) => {
    const res = await fetch(`${API_BASE}/posts/${postId}/unlike`,{
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }       
    })
    let data = null
    try{
        const text = await res.text()
        data = text ? JSON.parse(text) : null
    }catch(err){
        data = null
    }

    if (!res.ok){
        throw data
    }                   
    return data
}