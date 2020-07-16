import React, { Component } from 'react';
import ListView from "antd-mobile/lib/list-view";
import Toast from "antd-mobile/lib/toast";
import { fetchGoodsList } from 'service';
import GoodsItem from 'components/goodsItem';
import { ReactComponent as ClosedIcon } from 'images/common/privacy_closed.svg'


const NUM_ROWS = 20;
let pageIndex = 1;



const dataSource = new ListView.DataSource({
    rowHasChanged: (row1, row2) => row1 !== row2,
});

class Detail extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      dataSource:dataSource.cloneWithRows(props.listData),
      isLoading:false,
      hasMore: true,
      cacheListData: props.listData || [],
      fetchParams: props.fetchParams
    }
  }


   static getDerivedStateFromProps(props,state){
        const {listData,fetchParams}  = props;
        console.log('getDerivedStateFromProps',listData,fetchParams,state.fetchParams);

        if(fetchParams.keyword != state.fetchParams.keyword ) {
            pageIndex = 1;
            return {
                dataSource: dataSource.cloneWithRows(listData),
                isLoading:false,
                hasMore: true,
                fetchParams,
                cacheListData: listData || [],
            }
        }
        return {
            fetchParams,
        }
        
    }

  getMoreDetailData = async () =>{
    const {fetchParams} = this.state;
    const params = {
      'page': pageIndex,
      'page_size': NUM_ROWS,
      ...fetchParams
    };

    let result = await fetchGoodsList(params);
    if (!result && result.code != 1) {
      Toast.info(result.msg);
    }
   
    return {
      newList: this.handleCacheData(result.data),
      isHasMore: (!!result.success) || false
    }
  }

  handleCacheData = (array) =>{
    let {cacheListData} = this.state;
    if(!array || !array.length) {return cacheListData;}
   
    return cacheListData.concat(array)
  }


  onEndReached = async (event) => {
    const {isLoading,hasMore} = this.state;
    if (isLoading || !hasMore) {
      return;
    }
    this.setState({ isLoading: true });
    pageIndex++;

    let { newList, isHasMore } = await this.getMoreDetailData();
    // console.log('event',newList,isHasMore)
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(newList ),
      cacheListData: newList,
      isLoading: false,
      hasMore: isHasMore
    });

  }


  render(){
    const { dataSource, isLoading,cacheListData,hasMore,fetchParams } = this.state;

    console.log('render',dataSource,cacheListData);
    const rows = (rowData) =>{
        const item = rowData || {};
      //   if(!item.desc.length) {return null;}
        return <GoodsItem className="result-goods"  lsData={fetchParams.keyword}  goods={item} />
    }

    return (
      <>
        {
          !!cacheListData && cacheListData.length > 0 ? (
            <ul className='result-list'>
              <ListView 
                dataSource={dataSource}
                initialListSize={NUM_ROWS}
                renderRow={rows}
                // renderSeparator={separator}
                className="search-list"
                pageSize={NUM_ROWS}
                scrollRenderAheadDistance={500}
                onEndReachedThreshold={30}
                onScroll={() => { console.log('scroll'); }}
                onEndReached={this.onEndReached}
                style={{
                  width: '100%',
                  height: 'calc(100vh - 2.5rem)',
                  overflow: 'auto',
                }}
                renderFooter={() => (
                  <div
                    style={{
                      padding: 12,
                      textAlign: 'center',
                      fontSize: '.24rem',
                    }}
                  >
                    {isLoading
                      ? '加载中...'
                      : hasMore
                        ? '上拉加载更多数据'
                        : '没有更多数据了'}
                  </div>
                )}
              />
            </ul>
          ):(
            <div className="empty">
                <ClosedIcon className='icon' />
                <p>搜索不到此商品</p>
            </div>
            )
        }
      </>
    )
  }
   
}


export default Detail;