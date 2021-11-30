import axios from 'axios';

const LEAVEOFABSENCE_API_BASE_URL = "http://localhost:8080/api/v1/leaveofabsence";

class LeaveOfAbsenceService {

        getLeaveOfAbsence(){
            return axios.get(LEAVEOFABSENCE_API_BASE_URL);
        }

        createLeaveOfAbsence(leaveofabsence){
            return axios.post(LEAVEOFABSENCE_API_BASE_URL, leaveofabsence);
        }

        getLeaveOfAbsenceById(leaveofabsenceId){
            return axios.get(LEAVEOFABSENCE_API_BASE_URL + '/' + leaveofabsenceId);
        }

        updateLeaveOfAbsence(leaveofabsence, leaveofabsenceId){
            return axios.put(LEAVEOFABSENCE_API_BASE_URL + '/' + leaveofabsenceId, leaveofabsence);
        }

        deleteLeaveOfAbsence(leaveofabsenceId){
            return axios.delete(LEAVEOFABSENCE_API_BASE_URL + '/' + leaveofabsenceId);
        }
}

export default new LeaveOfAbsenceService()