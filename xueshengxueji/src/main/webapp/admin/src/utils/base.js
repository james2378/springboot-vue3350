const base = {
    get() {
        return {
            url : "http://localhost:8080/xueshengxueji/",
            name: "xueshengxueji",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/xueshengxueji/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "学生学籍管理系统"
        } 
    }
}
export default base
