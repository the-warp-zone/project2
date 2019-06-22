import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import Paper from "@material-ui/core/Paper";
import { AutoSizer, Column, Table } from "react-virtualized";
import Button from '@material-ui/core/Button';

const styles = theme => ({
  flexContainer: {
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box"
  },
  margin:{
    margin: theme.spacing(1)
  },
  tableRow: {
    cursor: "pointer"
  },
  tableRowHover: {
    "&:hover": {
      backgroundColor: theme.palette.grey[300]
    }
  },
  tableCell: {
    flex: 1
  },
  noClick: {
    cursor: "initial"
  }
});

class MuiVirtualizedTable extends React.PureComponent {
  static defaultProps = {
    headerHeight: 48,
    rowHeight: 48
  };

  getRowClassName = ({ index }) => {
    const { classes, onRowClick } = this.props;
    // console.log(this.props.classes);

    return clsx(classes.tableRow, classes.flexContainer, {
      [classes.tableRowHover]: index !== -1 && onRowClick != null
    });
  };

  cellRenderer = ({ cellData, columnIndex }) => {
    const { columns, classes, rowHeight, onRowClick } = this.props;
    return (
      <TableCell
    
        component="div"
        className={clsx(classes.tableCell, classes.flexContainer, {
          [classes.noClick]: onRowClick == null
        })}
        variant="body"
        style={{ height: rowHeight }}
        align={
          (columnIndex != null && columns[columnIndex].numeric) || false
            ? "right"
            : "left"
        }
      >
        {cellData}
      </TableCell>
      
    );
  };

  headerRenderer = ({ label, columnIndex }) => {
    const { headerHeight, columns, classes } = this.props;

    return (
      
      <TableCell
        component="div"
        className={clsx(
          classes.tableCell,
          classes.flexContainer,
          classes.noClick
        )}
        variant="head"
        style={{ height: headerHeight }}
        align={columns[columnIndex].numeric || false ? "right" : "left"}
      >
        
        <span>{label}</span>
      </TableCell>
    );
  };

  render() {
    const { classes, columns, ...tableProps } = this.props;
    return (
      <AutoSizer >
        
        {({ height, width }) => (
          
        <Table

            height={height}
            width={width}
            {...tableProps}
            rowClassName={this.getRowClassName}
          >
            {columns.map(({ dataKey, ...other }, index) => {
              return (
                
                <Column
                
                  key={dataKey}
                  headerRenderer={headerProps =>
                    this.headerRenderer({
                      ...headerProps,
                      columnIndex: index
                    })
                  }
                  className={classes.flexContainer}
                  cellRenderer={this.cellRenderer}
                  dataKey={dataKey}
                  {...other}
                />
              );
            })}
          </Table>
          )}
          
      </AutoSizer>
      
    );
  }
}

MuiVirtualizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  headerHeight: PropTypes.number,
  onRowClick: PropTypes.func,
  rowHeight: PropTypes.number
};


const VirtualizedTable = withStyles(styles)(MuiVirtualizedTable);

const ReactVirtualizedTable = ({ data }) => {
  
  const gameList = data;
  function createData(id, date, title) {
    return { id, date, title };
  }

  const rows = [];

  for (let i = 0; i < gameList.length; i += 1) {
    rows.push(createData(i, gameList[i][0], gameList[i][1]));
  }
  const bStyle = {
    marginRight: "1%",
    marginTop: "1%",
    float: "right",
    background: 'linear-gradient(45deg, #0a9df1 , #62058d )',
    color: "white"
  }
  return (
    
    <Paper style={{ 
      height: 800,
      width: "20%", 
      // background: 'linear-gradient(45deg, #0a9df1, #62058d)', 
      float: "right", 
      marginTop: "8%", 
      marginRight: "25%" }}>
      <VirtualizedTable
        rowCount={rows.length}
        
        rowGetter={({ index }) => rows[index]}
        columns={[
          {
            width: 200,
            label: "Release Date",
            dataKey: "date"
          },
          {
            width: 400,
            label: "Game Title",
            dataKey: "title"
          }
        ]}
      />
      <Button variant="contained" size="small" color="third" style={bStyle}>
          Close
        </Button>
    </Paper>
  );
};
export default ReactVirtualizedTable;
