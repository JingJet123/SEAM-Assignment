// get record with SPM/O LEVEL/EQUIVALENT
function getQualification(id) {
    return $axios({
      url: `/qualification/${id}`,
      method: 'get'
    })
}

// get record with STPM/A LEVEL/ UEC/EQUIVALENT (IF APPLICABLE)
function getQualificationSTPM(id) {
  return $axios({
    url: `/qualification/stpm/${id}`,
    method: 'get'
  })
}

// add new profile
function addQualification(params) {
  return $axios({
    url: '/qualification/add',
    method: 'post',
    data: { ...params }
  })
}

// modify profile
function editQualification(params) {
  return $axios({
    url: '/qualification/update',
    method: 'put',
    data: { ...params }
  })
}