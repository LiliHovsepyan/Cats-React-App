
const getAllCategories = async () => {
    const response = await fetch('https://api.thecatapi.com/v1/categories');
    return response.json();
}


const getFilteredCategories = async (category) => {
    const response = await fetch('https://api.thecatapi.com/v1/categories' + category);
    return response.json();
}


const getCatById = async (id) => {
    const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=1' + id);
    return response.json();
}

export {getAllCategories, getFilteredCategories, getCatById};


