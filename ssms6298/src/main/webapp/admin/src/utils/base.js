const base = {
    get() {
        return {
            url : "http://localhost:8080/ssms6298/",
            name: "ssms6298",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssms6298/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "疫情期间高校师生外出请假管理系统"
        } 
    }
}
export default base
