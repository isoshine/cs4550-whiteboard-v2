import {connect} from "react-redux";
import LessonTabsComponent from "../components/LessonTabsComponent";
import {addLesson, findLessons, deleteLesson, updateLesson} from "../services/LessonService";
import LessonService from "../services/LessonService";

//same as ModuleListContainer, more modern syntax
const stateToPropertyMapper = (state, match) => ({
    lessons: state.lessonReducer.lessons,
    newLessonTitle: state.lessonReducer.newLessonTitle,
    params: match.params
});

const dispatchToPropertyMapper = (dispatch) => {
    return {
        updateLesson: (lessonId, newLesson) => {
            LessonService.updateLesson(lessonId, newLesson)
                .then(actualLesson => dispatch({
                    type: "UPDATE_LESSON",
                    newLesson
                }))
        },
        addLesson: (moduleId, newLesson) => {
            LessonService.addLesson(moduleId, newLesson)
                .then(actualLesson => dispatch({
                    type: "ADD_LESSON",
                    newLesson
                }))
        },
        findLessons: (moduleId) => {
            LessonService.findLessons(moduleId)
                .then(actualLessons => dispatch({
                    type: "FIND_LESSONS",
                    actualLessons
                }))
        },
        deleteLesson: (lessonId) => {
            LessonService.deleteLesson(lessonId)
                .then(status => dispatch({
                type: "DELETE_LESSON",
                lessonId
            }))
        }
    }
};

const LessonTabsContainer = connect(
    stateToPropertyMapper, dispatchToPropertyMapper
)(
    LessonTabsComponent
);

export default LessonTabsContainer;