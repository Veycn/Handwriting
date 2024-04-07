/** * 并发任务控制 * 初次使用： sourcemap管理，上传多个文件 */
class TaskControl {
  constructor(parallelCount = 5) {
    this.parallelCount = parallelCount;
    this.tasks = [];
    this.runningCount = 0;
  }
  add(task) {
    return new Promise((resolve, reject) => {
      this.tasks.push({ task, resolve, reject });
      this._run();
    });
  }
  _run() {
    while (this.runningCount < this.parallelCount && this.tasks.length) {
      this.runningCount++;
      const { task, resolve, reject } = this.tasks.shift();
      task()
        .then(resolve, reject)
        .finally(() => {
          this.runningCount--;
          this._run();
        });
    }
  }
}
export default TaskControl;
