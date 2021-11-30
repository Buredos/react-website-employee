import axios from 'axios';

const HIERARCHY_API_BASE_URL = "http://localhost:8080/api/v1/hierarchy";

class HierarchyService {

        getHierarchy(){
            return axios.get(HIERARCHY_API_BASE_URL);
        }

        createHierarchy(hierarchy){
            return axios.post(HIERARCHY_API_BASE_URL, hierarchy);
        }

        getHierarchyById(hierarchyId){
            return axios.get(HIERARCHY_API_BASE_URL + '/' + hierarchyId);
        }

        updateHierarchy(hierarchy, hierarchyId){
            return axios.put(HIERARCHY_API_BASE_URL + '/' + hierarchyId, hierarchy);
        }

        deleteHierarchy(hierarchyId){
            return axios.delete(HIERARCHY_API_BASE_URL + '/' + hierarchyId);
        }
}

export default new HierarchyService()