export const fetchBackgroundImage = async (city) => {

    const accessKey = 'JSnbyuLN3u8gj59HrR9-Mz6f34h626R4CFmygvIWmHw';
    const res = await fetch(
        `https://api.unsplash.com/search/photos?query=${encodeURIComponent(city)}&client_id=${accessKey}`
    );
    const data = await res.json();
    return data.results[0]?.urls?.full;
};