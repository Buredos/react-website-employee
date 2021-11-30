import axios from 'axios';

const POSITION_API_BASE_URL = "http://localhost:8080/api/v1/position";

class PositionService {

        getPosition(){
            return axios.get(POSITION_API_BASE_URL);
        }

        createPosition(position){
            return axios.post(POSITION_API_BASE_URL, position);
        }

        getPositionById(positionId){
            return axios.get(POSITION_API_BASE_URL + '/' + positionId);
        }

        updatePosition(position, positionId){
            return axios.put(POSITION_API_BASE_URL + '/' + positionId, position);
        }

        deletePosition(positionId){
            return axios.delete(POSITION_API_BASE_URL + '/' + positionId);
        }
}

export default new PositionService()