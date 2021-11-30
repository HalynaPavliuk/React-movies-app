import React from 'react'


class Search extends React.Component {
    state = {search: '',
             type: 'all'}


    handleFilter = (e) => {
        this.setState(() => ({type: e.target.dataset.type}), () => {
            this.props.searchMovie(this.state.search, this.state.type)
        })
        
    }


    render() {
        const {searchMovie} = this.props;

        return(
            <div>
                 <form className="col s12 ">
                    <div className="row ">
                        <input 
                        placeholder="Searc movie" 
                        id="search" 
                        type="search" 
                        className="validate " 
                        value={this.state.search} 
                        onChange={(e) => this.setState({search: e.target.value})} />
    
                        <button 
                        className="btn waves-effect waves-light light-blue" 
                        type="button" 
                        name="action"  
                        onClick={() => this.props.searchMovie(this.state.search, this.state.type)}>
                            Search
                          </button>
                    </div>

                    <div className="filter">
                        <label>
                            <input name="moviegroup" type="radio" data-type="all" onChange={this.handleFilter} checked={this.state.type === 'all'} />
                            <span>All</span>
                        </label>
                        
                        <label>
                            <input name="moviegroup" type="radio" data-type="movie" onChange={this.handleFilter} checked={this.state.type === 'movie'} />
                            <span>Movie only</span>
                        </label>
                        
                        <label>
                            <input name="moviegroup" type="radio" data-type="series" onChange={this.handleFilter} checked={this.state.type === 'series'} />
                            <span>Series only</span>
                        </label>
                    </div>
                </form>
            </div>
           
        )
    }
}

export default Search;