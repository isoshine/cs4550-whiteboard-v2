const findLessonsForModule = (moduleId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001479351/modules/${moduleId}/lessons`)
        .then(response => response.json());

const addLesson = (moduleId, newLesson) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001479351/modules/${moduleId}/lessons`, {
        method: 'POST',
        body: JSON.stringify(newLesson),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

const deleteLesson = (lessonId) => {
    return fetch(`http://wbdv-generic-server.herokuapp.com/api/001479351/lessons/${lessonId}`,{
        method: "DELETE"})
        .then(response => response.json())
};

const updateLesson = (lessonId, lesson) => {
    return fetch(`http://wbdv-generic-server.herokuapp.com/api/001479351/lessons/${lessonId}`,{
        method: "PUT",
        body: JSON.stringify(lesson),
        headers: {"content-type": "application/json"}})
        .then(response => response.json())
    };

export default {
    deleteLesson,
    addLesson,
    updateLesson,
    findLessonsForModule
}