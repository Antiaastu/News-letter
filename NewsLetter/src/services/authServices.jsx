const API_BASE = import.meta.env.VITE_API_BASE
export const login = async (email, password) => {
    const res = await fetch(`${API_BASE}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password }),
    })
    const data = await res.json()
    console.log(data)

    if (!res.ok) {
        throw data
    }
    // console.log(res)
    return data
}

export const register = async (name, email, password) => {
    const res = await fetch(`${API_BASE}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, password }),
    })
    const data = await res.json()
    console.log(data)
    if (!res.ok){
        throw data
    }
    

    return data
}

export const loginWithGoogle = async () => {
    const res = await fetch(`${API_BASE}/auth/google`, {
        method: "GET",  
        headers: {
            "Content-Type": "application/json"
        },      
    })
    const data = await res.json()       
    console.log(data)
    if (!res.ok) {  
        throw data
    }   
    return data.url
    
}

export const handleGoogleCallback = async () => {
    
    const res = await fetch(`${API_BASE}/auth/google/callback`, {
    method: "GET",  
    credentials: "include",
    headers: {
        "Content-Type": "application/json"
    },      
    })
    const data = await res.json()
    console.log(data)
    if(!res.ok) throw data

    return data
    
}
