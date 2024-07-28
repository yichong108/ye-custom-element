<div class="card-layout-container">
  <div class="card-title">
    <div class="card-title-con">
      <div class="title-wrap">
        <div class="w-text">{comTitle}</div>
      </div>
    </div>
    <div class="under-line">
      <div class="trapezoid"></div>
      <div class="bottom-line"></div>
    </div>
  </div>
  <div class="card-content">
    <slot></slot>
  </div>
</div>

<script>
  export let comTitle = '标题';
</script>

<style>
  .card-layout-container {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 15px;
    box-sizing: border-box;
    width: 100%;
    /*用了display: flex，这个height:100%好像没什么效果*/
    height: 100%;
    max-height: 973px;
    /*
    shadow dom使用的基础组件弹窗之类的组件会被遮挡
    overflow-y: auto;*/
    overflow: visible;
    background: rgba(255, 255, 255, 0.9);
    box-shadow:
            3px 3px 10px rgba(17, 59, 113, 0.1),
            -3px -3px 10px rgba(17, 59, 113, 0.1);
    border-radius: 8px;
    font-family: Microsoft YaHei;
    padding: 0 15px 15px 15px;
  }

  /* 标题 */
  .card-layout-container .card-title {
    position: relative;
    /* cursor: pointer; */
  }

  .card-layout-container .card-title .card-title-con {
    height: 55px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .card-layout-container .card-title .card-title-con .title-wrap {
    font-size: 20px;
    font-family: Microsoft YaHei;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .card-layout-container .card-title .card-title-con .title-wrap .w-text {
    line-height: 26px;
    color: #333333;
    font-weight: bold;
  }

  /* 标题下边线 */
  .card-layout-container .card-title .under-line {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .card-layout-container .card-title .under-line .bottom-line {
    height: 1px;
    background: linear-gradient(90deg, #03318f 0%, #cdd8ec 100%);
  }

  .card-layout-container .card-title .under-line .trapezoid {
    position: absolute;
    bottom: 0;
    /* 直角梯形 */
    width: 30px;
    height: 0;
    border-width: 0 7px 7px 0;
    border-style: none solid solid;
    border-color: transparent transparent rgba(52, 131, 234, 1);
  }

  .card-layout-container .card-content {
    flex: 1;
  }
</style>
