import React from "react";
import { useParams } from "react-router-dom";

const sampleProjects = {
  Aglosong: [
    {
      title: "Water System Level II",
      kcGrant: 220800,
      lcc: 264157.57,
      total: 484957.57,
      dateCompleted: "May 1, 2004",
      cycle: "Year 1",
    },
    
    {
      title: "Road Improvement",
      kcGrant: 1377845.74,
      lcc: 514078.47,
      total: 1891924.21,
      dateCompleted: "2010",
        cycle: "MT2",
    },
    {
      title: "Improve Access of Transportation through Community managed Farm to Market Road Improvement with Spot Concreting",
      kcGrant: 909710.47,
      lcc: 1236153.53,
      total: 2145864.0,
      dateCompleted: "2014-2016",
        cycle: "NCDDP",
    },
    {
      title: "CONCRETING OF FARM-TO-MARKET ROAD",
      kcGrant: 1350000.00,
      lcc: 514078.47,
      total: 1891924.21,
      dateCompleted: "SEPT. 16, 2023",
    },
    {
      title: "Improvement of Farm to Market Road",
      kcGrant: 395163.29,
      lcc: 403236.71,
      total: 798400.00,
      dateCompleted: "2024",
    },
  ],

  Agnaga: [
    {
      title: "Water System Level II    ",
      kcGrant: 386250.00,
      lcc: 403374.01,
      total: 789624.01,
      dateCompleted: "May 2004",
        cycle: "Year 1",
    },

{
      title: "Post Harvest Facilities",
      kcGrant: 1138730.00,
      lcc: 246668.44,
      total: 1385398.44,
      dateCompleted: "September 30, 2005",
        cycle: "Year 2",
    },
    {
      title: "Rural Electrification",
      kcGrant: 626634.58,
      lcc: 265296.31,
      total: 892930.89,
      dateCompleted: "March 2004",
        cycle: "MT",
    },
    {
      title: "Construction 1 CL Building",
      kcGrant: 448817.08,
      lcc: 119389.29,
      total: 648206.37,
      dateCompleted: "2010",
        cycle: "MT2",
    },
    {
      title: "Provide A Convenient Place for Barangay Activities Through Construction of an Empowerment and Information Center",
      kcGrant: 671639.41,
      lcc: 131960.59,
      total: 803600.00,
      dateCompleted: "2014-2016",
        cycle: "NCDDP",
    },
    {
      title: "Enchancing Quality of Education through Community Managed Construction of 1-Unit Classroom School Building with Amenities",
      kcGrant: 952510.00,
      lcc: 209090.00,
      total: 1161600.00,
      dateCompleted: "2018",
        cycle: "Tier 2",
    },
     {
      title: "Concreting of Access road",
      kcGrant:573520.79,
      lcc:418479.21,
      total: 992000.00,
      dateCompleted: "September 14, 2023",
    },
    {
      title: "Improvement of Access road",
      kcGrant: 286760.40,
      lcc: 453239.60,
      total: 740000.00,
      dateCompleted: "2024",
    },
  ],

  
  BacjawanNorte : [
    {
      title: "Water System Level II",
      kcGrant: 442840.00,
      lcc: 247509.31,
      total: 690349.31,
      dateCompleted: "March 09, 2004",
        cycle: "Year 1",
    },
    {
      title: "Constraction of Day Care Center",
      kcGrant: 444847.00,
      lcc: 146081.33,
      total: 590928.33,
      dateCompleted: "",
        cycle: "Year 3",
    },
    {
      title: "Rural Electrification",
      kcGrant: 337909.60,
      lcc: 244532.10,
      total: 582441.70,
      dateCompleted: "August 15, 2009",
        cycle: "MT",
    },
    {
      title: "Improvement Quality education Through Community Managed Construction of 1 unit 1 Classroom Pre-School Building",
      kcGrant: 567961.11,
      lcc: 119621.89,
      total: 687673.00,
      dateCompleted: "2014-2016",
        cycle: "NCDDP",
    },
    {
      title: "Concreting of Access road",
      kcGrant:421310.57,
      lcc:278688.43,
      total: 700000.00,
      dateCompleted: "August 19, 2023",
    },
    {
      title: "Improvement of Pathway",
      kcGrant: 210655.29,
      lcc: 403344.71,
      total: 614000.00,
      dateCompleted: "2024",
    },
  ],


BacjawanSur: [
    {
      title: "Water System Level II",
      kcGrant: 322000.00,
      lcc: 417186.70,
      total: 739186.70,
      dateCompleted: "March 04, 2004",
      cycle: "Year 1",
    },
    {
      title: "Construction of Day Care Center",
      kcGrant: 479066.81,
      lcc: 102843.22,
      total: 581910.03,
      dateCompleted: "June 25, 2009",
      cycle: "MT",
    },
    {
      title: "Construction of 2 CL Building",
      kcGrant: 860569.11,
      lcc: 346797.93,
      total: 1207367.04,
      dateCompleted: "2010",
      cycle: "MT2",
    },
    {
      title: "Providing Conductive and Comfortable Place for Barangay Assemblies, Trainings and Activities Through a Community Managed Construction of Community Center",
      kcGrant: 623162.83,
      lcc: 130644.17,
      total: 753807.00,
      dateCompleted: "2014-2016",
      cycle: "NCDDP",
    },
    {
      title: "Enchancing Quality od Education Through Community Managed Construction of 1-unit-2 Classroom School Building with Amenities in bacjawan Elementary School",
      kcGrant: 1670360.00,
      lcc: 361640.00,
      total: 2032000.00,
      dateCompleted: "2018",
      cycle: "Tier2",
    },
    {
      title: "Construction of Drainage Canal",
      kcGrant:673116.56,
      lcc:278988.44,
      total: 800000.00,
      dateCompleted: "October 26, 2023",
    },
    {
      title: "Construction of Daycare Center",
      kcGrant: 336558.28,
      lcc:803341.72,
      total: 1139900,
      dateCompleted: "2024",
    },
],

Bagongon: [
    {
      title: "Construction of 1CL School Building",
      kcGrant: 530720.00,
      lcc: 323769.20,
      total: 854489.20,
      dateCompleted: "January 25, 2004",
      cycle: "Year 1",
    },
    {
      title: "Barangay Trail",
      kcGrant: 713717.00,
      lcc: 63063.13,
      total: 776780.13,
      dateCompleted: "October 5, 2005",
      cycle: "Year 2",
    },
    {
      title: "Construction of 2 Units 1CL Building",
      kcGrant: 1262010.00,
      lcc: 253690.20,
      total: 1515700.20,
      dateCompleted: "2012",
      cycle: "AUSAID",
    },
    {
      title: "Improvement of Shoreline and Quality of Life and mobility through Community Managed Reconstruction of shoreline protection, construction of foot bridge and concreting of foot trail",
      kcGrant: 994947.33,
      lcc: 354952.67,
      total: 1349900.00,
      dateCompleted: "2014-2016",
      cycle: "NCDDP",
    },
    {
      title: "Providing quality of early childhood development through community managed construction of day car center with amenities",
      kcGrant: 608160.00,
      lcc: 226040.00,
      total: 834200.00,
      dateCompleted: "2018",
      cycle: "Tier2",
    }, 
    {
      title: "Construction of Shoreline Protection",
      kcGrant:817091.09,
      lcc:113008.91,
      total: 930100.00,
      dateCompleted: "October 22, 2023",
    },
    {
      title: "Construction of Shoreline Protection",
      kcGrant:408545.54,
      lcc: 403454.46,
      total: 812000.00,
      dateCompleted: "2024",
    },
],

Batiti: [
    {
      title: "Water System Level II",
      kcGrant: 322000.00,
      lcc: 294213.70,
      total: 616581.70,
      dateCompleted: "May 08, 2004",
      cycle: "Year 1",
    },
    {
      title: "Construction of Day Care Center",
      kcGrant: 465947.64,
      lcc: 79213.21,
      total: 545160.85,
      dateCompleted: "August 08, 2007",
      cycle: "Year 3",
    },
    {
      title: "Solar Dryer with Warehouse",
      kcGrant: 761557.04,
      lcc: 126614.17,
      total: 888171.21,
      dateCompleted: "2010",
      cycle: "MT",
    },
    {
      title: "Improve Quality of Life and Safety through Installation of Raillings in Spillway and Rehabilitation of Solar Dryer Warehouse",
      kcGrant: 557295.69,
      lcc: 15504.31,
      total: 572800.00,
      dateCompleted: "2014-2016",
      cycle: "NCDDP",
    },
    {
      title: "Providing Security and Safety to the Community through Community Managed Installation Solar Street Lights",
      kcGrant: 488265.00,
      lcc: 265135.00,
      total: 753400.00,
      dateCompleted: "2018",
      cycle: "Tier 2",
    }, 
    {
      title: "Construction of Concrete Path Way",
      kcGrant:412280.44,
      lcc:298718.56,
      total: 711000.00,
      dateCompleted: "July 17, 2023",
    },
    {
      title: "Improvement of Pathway",
      kcGrant: 206140.22,
      lcc: 453359.78,
      total: 659500.00,
      dateCompleted: "2024",
    },
],

Botlog: [
    {
      title: "Day Care Center",
      kcGrant: 239831.00,
      lcc: 207815.12,
      total: 447646.12,
      dateCompleted: "March 02, 2004",
      cycle: "Year 1",
    },
    {
      title: "Construction of Brgy Health Station",
      kcGrant: 656157.00,
      lcc: 147850.67,
      total: 753400.67,
      dateCompleted: "June 30, 2006",
      cycle: "Year 3",
    },
    {
      title: "Improve quality of Life Through Community managed Installation of 2 units Charging Station",
      kcGrant: 525201.58,
      lcc: 358368.42,
      total: 883588.00,
      dateCompleted: "2014-2016",
      cycle: "NCDDP",
    },
    {
      title: "Providing Security and Safety to the Community Through Community Managed Installation of Solar Street Lights",
      kcGrant: 197565.00,
      lcc: 172435.00,
      total: 370000.00,
      dateCompleted: "2018",
      cycle: "Tier 2",
    },
    {
      title: "Construction of Slope Protection",
      kcGrant:210960.90,
      lcc:159193.10,
      total: 455400.00,
      dateCompleted: "September 07, 2023",
    },
    {
      title: "Construction of Slope Protection",
      kcGrant: 105480.45,
      lcc: 354519.55,
      total: 460000.00,
      dateCompleted: "2024",
    },
],

Calamigan: [
    {
      title: "Water System Level II",
      kcGrant: 403500.00,
      lcc: 440802.87,
      total: 844302.87,
      dateCompleted: "April 05, 2004",
      cycle: "Year 1",
    },
    {
      title: "Construction of 1-CL School Building",
      kcGrant: 474747.64,
      lcc: 102484.14,
      total: 577231.78,
      dateCompleted: "July 11.2009",
      cycle: "MT",
    },
    {
      title: "Construction of 1-CL School Building",
      kcGrant: 431019.08,
      lcc: 206072.29,
      total: 637019.37,
      dateCompleted: "2010",
      cycle: "MT2",
    },
    {
      title: "Construction of DayCare Center with Amenities",
      kcGrant: 600392.73,
      lcc: 122807.27,
      total: 723200.00,
      dateCompleted: "2010",
      cycle: "MT2",
    },
    {
      title: "Improve Quality of Life Through Community Managed Installation of Solar Street Lights",
      kcGrant: 603223.79,
      lcc: 30119.21,
      total: 633343.00,
      dateCompleted: "2014-2016",
      cycle: "NCDDP",
    },
    {
      title: "Enchancing Quality of Education Through Community Managed Construction of 1-Unit Classroom School Building with Amenities",
      kcGrant: 870880.00,
      lcc: 290720.00,
      total: 1161600.00,
      dateCompleted: "2018",
      cycle: "Tier 2",
    },
    {
      title: "Construction of Solar Dryer",
      kcGrant:482039.08,
      lcc:280960.92,
      total: 793000.00,
      dateCompleted: "September 19, 2023",
    },
    {
      title: "Improvement of Access Road",
      kcGrant: 241019.54,
      lcc: 353280.46,
      total: 594300.00,
      dateCompleted: "2024",
    },
],
Dungon: [
    {
      title: "Motorized Banca",
      kcGrant: 250000.00,
      lcc: 174046.91,
      total: 424046.91,
      dateCompleted: "May 24, 2004",
      cycle: "Year 1",
    },
    {
      title: "Construction of 1-CL School Building",
      kcGrant: 417763.43,
      lcc: 121123.78,
      total: 538887.21,
      dateCompleted: "June 30, 2009",
      cycle: "MT",
    },
    {
      title: "Solar Electrification",
      kcGrant: 844647.23,
      lcc: 288206.87,
      total: 1132854.10,
      dateCompleted: "2010",
      cycle: "MT2",
    },
    {
      title: "Construction of DayCare Center with Amenities",
      kcGrant: 597203.57,
      lcc: 134836.43,
      total: 985312.00,
      dateCompleted: "2012",
      cycle: "AUSAID",
    },
    {
      title: "Preventing Shoreline Erosion Through Community Managed Construction of Shoreline Protection Structure",
      kcGrant: 762501.31,
      lcc: 222810.69,
      total: 985312.00,
      dateCompleted: "2014-2016",
      cycle: "NCDDP",
    },
    {
      title: "Building more Resilient Public infrastructure Through Community Managed Construction of Unit Classroom Building with Complete Amenities",
      kcGrant: 1042380.00,
      lcc: 247720.00,
      total: 1290100.00,
      dateCompleted: "2018",
      cycle: "Tier 2",
    },
    {
      title: "Construction of SeaWall",
      kcGrant:245234.25,
      lcc:753665.75,
      total: 998900.00,
      dateCompleted: "October 19, 2023",
    },
    {
      title: "Construction of Seawall",
      kcGrant: 122617.13,
      lcc: 603382.87,
      total: 726000.00,
      dateCompleted: "2024",
    },
],

Igbon: [
    {
      title: "water System Level II",
      kcGrant: 394304.90,
      lcc: 254537.92,
      total: 648842.67,
      dateCompleted: "February 11, 2004",
      cycle: "Year 1",
    },
    {
      title: "Construction of Brgy. trail with Slope Protection",
      kcGrant: 924879.75,
      lcc: 490826.92,
      total:1415706.67,
      dateCompleted: "December 31, 2006",
      cycle: "Year 3",
    },
    {
      title: "Construction of 1-CL School Building",
      kcGrant: 458537.91,
      lcc: 121804.16,
      total: 580342.07,
      dateCompleted: "July 07, 2009",
      cycle: "Year 1",
    },
    {
      title: "Providing Better and Safer Accessibility through Community managed Rehabilitation and Improvement of Foot Trail and Construction of Footbridge",
      kcGrant: 1266747.64,
      lcc: 49679.36,
      total: 1316427.00,
      dateCompleted: "2014-2016",
      cycle: "NCDDP",
    },
    {
      title: "Providing Security and Safety to the Community through Community Managed installation of Solar Street Lights",
      kcGrant: 608865.00,
      lcc: 155235.00,
      total: 764100.00,
      dateCompleted: "2018",
      cycle: "Tier 2",
    },
    {
      title: "Construction of Pathway with Foot Bridge",
      kcGrant:1366241.19,
      lcc:83758.81,
      total: 1450000.00,
      dateCompleted: "December 26, 2023",
    },
    {
      title: "Construction of Shoreline Protection",
      kcGrant: 683120.59,
      lcc: 353379.41,
      total: 1036500.00,
      dateCompleted: "2024",
    },
],
Jamulawon: [
    {
      title: "Health Center",
      kcGrant: 336000.00,
      lcc: 219779.41,
      total: 555779.41,
      dateCompleted: "February 03, 2004",
      cycle: "Year 1",
    },
    {
      title: "Road Rehabilitation",
      kcGrant: 1310199.87,
      lcc: 161046.54,
      total: 1471246.41,
      dateCompleted: "December 30, 2006",
      cycle: "Year 3",
    },
    {
      title: "Road Improvement",
      kcGrant: 1535755.21,
      lcc: 568620.00,
      total: 2104375.21,
      dateCompleted: "September 30, 2009",
      cycle: "MT",
    },
    {
      title: "Mechanical Dryer",
      kcGrant: 789903.81,
      lcc: 332613.33,
      total: 1122517.14,
      dateCompleted: "2010",
      cycle: "MT2",
    },
    {
      title: "improving the Quality of Life through Rehabilitation of Community managed Post Harvest Facilities",
      kcGrant: 609190.93,
      lcc: 41041.07,
      total: 650232.00,
      dateCompleted: "2014-2016",
      cycle: "NCDDP",
    },
    {
      title: "Providing Security and Safety to the Community Through Community Managed Installation of Solar Street Lights",
      kcGrant: 436515.00,
      lcc: 178485.00,
      total: 615000.00,
      dateCompleted: "2018",
      cycle: "tIER 2",
    },
    {
      title: "Construction of Concreting of Pathway",
      kcGrant:524794.42,
      lcc:215205.68,
      total: 740000.00,
      dateCompleted: "October 12, 2023",
    },
    {
      title: "Improvement of Pathway",
      kcGrant: 262397.21,
      lcc: 353602.79,
      total: 616000.00,
      dateCompleted: "2024",
    },
],
Poblacion: [
    {
      title: "Providing Security and Safety Through Community Managed Installation of Solar Street Lights",
      kcGrant: 770765.00,
      lcc: 213835.00,
      total: 984600.00,
      dateCompleted: "2018",
      cycle: "Tier 2",
    }, 
    {
      title: "Daycare Center",
      kcGrant: 248160.00,
      lcc: 234092.85,
      total: 482252.01,
      dateCompleted: "May 19, 2004",
      cycle: "Year 1",
    }, 
    {
      title: "Construction of Sidewalk",
      kcGrant: 836640.70,
      lcc: 345581.85,
      total: 11182222.55,
      dateCompleted: "2010",
      cycle: "MT 2",
    }, 
    {
      title: "Building more Resilient Public Infrastructure through Community Managed Rehabilitation of Multi Purpose Center and Construction of 1 Unit 2 CL Elementary School Building",
      kcGrant: 1717222.23,
      lcc: 114577.77,
      total: 1831800.00,
      dateCompleted: "2014-2016",
      cycle: "NCDDP",
    }, 
    {
      title: "Improvement of Access Road",
      kcGrant:1904398.31,
      lcc:49801.69,
      total: 1954200.00,
      dateCompleted: "October 20, 2024",
    },
],
Polopiña: [
    {
      title: "Barangay Trail",
      kcGrant: 954800.00,
      lcc: 805345.56,
      total: 1760145.56,
      dateCompleted: "November 30, 2005",
      cycle: "Year 2",
    }, 
    {
      title: "Construction of Brgy. trail",
      kcGrant: 350682.00,
      lcc: 249525.14,
      total: 600207.14,
      dateCompleted: "December 31, 2006",
      cycle: "Year 3",
    }, 
    {
      title: "Construction of 1 CL Building",
      kcGrant: 651485.21,
      lcc: 231040.16,
      total: 882525.37,
      dateCompleted: "2010",
      cycle: "MT2",
    }, 
    {
      title: "Construction of 2 Units 1 CL Building",
      kcGrant: 1252919.00,
      lcc: 262780.00,
      total: 1515699.14,
      dateCompleted: "2012",
      cycle: "AUSAID",
    }, 
    {
      title: "Maximizing the Educational Services through Repair of School Mini Gym Sabggutan Elementary School",
      kcGrant: 1696446.39,
      lcc: 15553.61,
      total: 1712000.00,
      dateCompleted: "2014-2016",
      cycle: "NCDDP",
    }, 
    {
      title: "Construction of Shoreline Protection with Pathway",
      kcGrant:1860298.91,
      lcc:134701.09,
      total: 1995000.00,
      dateCompleted: "November 23, 2023",
    },
    {
      title: "Improvement of Pathway with Foot Bridge",
      kcGrant: 952199.15,
      lcc: 323300.85,
      total: 1275500.00,
      dateCompleted: "",
    },
    {
      title: "Construction of Daycare Center",
      kcGrant: 930149.46,
      lcc: 403350.54,
      total: 1333500.00,
      dateCompleted: "2024",
    },
],
Salvacion: [
    {
      title: "Health Center",
      kcGrant: 332100.00,
      lcc: 235235.37,
      total: 567335.37,
      dateCompleted: "April 07, 2004",
      cycle: "Year 1",
    },
    {
      title: "Sea Wall",
      kcGrant: 741053.00,
      lcc: 521321.79,
      total: 1262374.79,
      dateCompleted: "November 30, 2005",
      cycle: "Year 2",
    },
    {
      title: "Installation of Artificial Reefs",
      kcGrant: 336979.74,
      lcc: 81753.30,
      total: 418733.04,
      dateCompleted: "July 08, 2009",
      cycle: "MT",
    },
    {
      title: "Construction of 1 CL Building",
      kcGrant: 553697.61,
      lcc: 117174.04,
      total: 670871.65,
      dateCompleted: "2010",
      cycle: "Year 1",
    },
    {
      title: "Building of Better and more Resilient Facilities through Community Managed Rehabilitation of DayCare Center",
      kcGrant: 514165.59,
      lcc: 29410.41,
      total: 543576.00,
      dateCompleted: "2014-2016",
      cycle: "NCDDP",
    },
    {
      title: "Providing Security and Safety to the Community through Community Managed Installation of Solar Street Lights",
      kcGrant: 299433.00,
      lcc: 171567.00,
      total: 471000.00,
      dateCompleted: "2018",
      cycle: "Tier 2",
    },
    {
      title: "Construction of Storm Drainage",
      kcGrant:311179.90,
      lcc:288819.10,
      total: 600000.00,
      dateCompleted: "October 30, 2023",
    },
    {
      title: "Construction of Drainage Canal",
      kcGrant:155589.95,
      lcc: 353388.54,
      total: 509000.00,
      dateCompleted: "2024",
    },
],
Talotuan: [
    {
      title: "Improving Ease of Access Through Community Managed Construction of Footbridge in Several Sitios",
      kcGrant: 1434624.26,
      lcc: 126863.74,
      total: 1561488.00,
      dateCompleted: "2014-2016",
      cycle: "Year 1",
    },
    {
      title: "Water System Level II",
      kcGrant: 259700.00,
      lcc: 324855.00,
      total: 584555.12,
      dateCompleted: "May 17, 2004",
      cycle: "Year 1",
    },
    {
      title: "Improvement of Brgy. Trail",
      kcGrant: 391526.45,
      lcc: 122318.44,
      total: 513844.89,
      dateCompleted: "August 13, 2009",
      cycle: "MT",
    },
    {
      title: "Construction of DayCare Center",
      kcGrant: 478439.95,
      lcc: 164681.71,
      total: 743121.67,
      dateCompleted: "2010",
      cycle: "MT2",
    },
    {
      title: "Construction of 2 Units 1 CL Building",
      kcGrant: 1250282.00,
      lcc: 256918.00,
      total: 1507200.00,
      dateCompleted: "2012",
      cycle: "AUSAID",
    },
    {
      title: "Concreting of Pathway with Foot Bridge",
      kcGrant:1383422.90,
      lcc:116576.10,
      total: 1500000.00,
      dateCompleted: "December 22, 2023",
    },
    {
      title: "Improvement of Pathway",
      kcGrant: 691711.46,
      lcc: 353410.05,
      total: 1045100.00,
      dateCompleted: "2024",
    },
],
Tambaliza: [
    {
      title: "DayCare Center",
      kcGrant: 233300.00,
      lcc: 266684.86,
      total: 499984.86,
      dateCompleted: "March 12, 2004",
      cycle: "Year 1",
    },
    {
      title: "Improvement of Brgy. Trail",
      kcGrant: 359849.35,
      lcc: 159513.70,
      total: 519363.05,
      dateCompleted: "July 24, 2009",
      cycle: "MT",
    },
    {
      title: "Construction of 2 CL Building",
      kcGrant: 728399.59,
      lcc: 347336.94,
      total: 1075736.54,
      dateCompleted: "2010",
      cycle: "NCDDP",
    },
    {
      title: "Enchancing Access and Mobility through Community Managed Construction Foor Trail",
      kcGrant: 1468712.66,
      lcc: 38887.34,
      total: 1507600.00,
      dateCompleted: "2014-2016",
      cycle: "NCDDP",
    },
    {
      title: "Concreting of Pathway with Cross Drainage",
      kcGrant:1534149.39,
      lcc:165850.61,
      total: 1700000.00,
      dateCompleted: "September 20, 2023",
    },
    {
      title: "Construction of Pathway with Shoreline Protection",
      kcGrant:767074.69,
      lcc: 353325.31,
      total: 1120400.00,
      dateCompleted: "2024",
    },
],
Tamisac: [
    {
      title: "Water System Level II",
      kcGrant: 445490.00,
      lcc: 118628.00,
      total: 564118.00,
      dateCompleted: "June 14, 2004",
      cycle: "Year 1",
    },
    {
      title: "Road rehabilitation",
      kcGrant: 1513840.00,
      lcc: 86724.87,
      total: 1600564.87,
      dateCompleted: "September 30, 2005",
      cycle: "Year 2",
    },
    {
      title: "Road Improvement",
      kcGrant: 920413.81,
      lcc: 224422.72,
      total: 1144836.52,
      dateCompleted: "2010",
      cycle: "MT2",
    },
    {
      title: "Provide Convenient Place for School Activities through Community Managed Repair of Gym Roofing System of Tamis-ac Elementary School",
      kcGrant: 410717.38,
      lcc: 65350.62,
      total: 476068.00,
      dateCompleted: "2014-2016",
      cycle: "NCDDP",
    },
    {
      title: "Providing Better and Safe access to education of Kindergarten Pupils through Community Managed Construction of 1 Unit Classroom with Amenities",
      kcGrant: 983880.00,
      lcc: 177720.00,
      total: 1161600.00,
      dateCompleted: "2018",
      cycle: "Tier 2",
    },
    {
      title: "Concreting of Pathway with Cross drainage",
      kcGrant:259507.06,
      lcc:159011.94,
      total: 438000.00,
      dateCompleted: "October 26, 2023",
    },
    {
      title: "Construction of Solar Dryer",
      kcGrant: 129753.53,
      lcc: 353346.47,
      total: 483100.00,
      dateCompleted: "2024",
    },
],
Loong: [
    {
      title: "Road Rehabilitation",
      kcGrant: 596728.56,
      lcc: 59587.13,
      total: 656315.69,
      dateCompleted: "December 29, 2006",
      cycle: "Year 3",
    },
    {
      title: "Construction of 1 CL School Building",
      kcGrant: 402967.62,
      lcc: 152115.36,
      total: 555082.98,
      dateCompleted: "June 30, 2009",
      cycle: "MT",
    },
    {
      title: "Construction of 1 CL Building",
      kcGrant: 441687.08,
      lcc: 195669.29,
      total: 637356.37,
      dateCompleted: "2010",
      cycle: "Year 3",
    },
    {
      title: "Improve Access and Mobility through Community rehabilitation of Farm to Market Road ",
      kcGrant: 1435286.07,
      lcc: 756406.93,
      total: 2191693.00,
      dateCompleted: "2014-2016",
      cycle: "NCDDP",
    },
    {
      title: "Improvement of Access road",
      kcGrant:1507829.39,
      lcc:410170.61,
      total: 1918000.00,
      dateCompleted: "August 10, 2023",
    },
    {
      title: "Construction of 1 Unit Barangay Health Station",
      kcGrant: 753914.69,
      lcc: 1503387.60,
      total: 2257300.00,
      dateCompleted: "2024",
    },
],
Macalbang: [
    {
      title: "Health Center",
      kcGrant: 288500.00,
      lcc: 252100.50,
      total: 540600.50,
      dateCompleted: "February 05, 2004",
      cycle: "Year 1",
    },
    {
      title: "Construction of 2 Units DayCare Center",
      kcGrant: 964707.89,
      lcc: 178467.67,
      total: 1143175.56,
      dateCompleted: "",
      cycle: "Year 3",
    },
    {
      title: "Road Improvement",
      kcGrant: 1840859.70,
      lcc: 1347227.50,
      total: 3188087.20,
      dateCompleted: "November 14, 2009",
      cycle: "MT",
    },
    {
      title: "Construction of 1 CL Building",
      kcGrant: 415283.08,
      lcc: 223258.29,
      total: 638541.37,
      dateCompleted: "2010",
      cycle: "MT2",
    },
    {
      title: "Enchancing Access and Mobility through Community Managed Road Improvement with Spot Concreting and Installation of PCRP",
      kcGrant: 1005007.95,
      lcc: 705319.05,
      total: 1710327.00,
      dateCompleted: "2014-2016",
      cycle: "NCDDP",
    },
    {
      title: "Providing Security and Safety to the Community Through Community Managed Installation of Solar Street Lights",
      kcGrant: 540677.00,
      lcc: 190323.00,
      total: 731000.00,
      dateCompleted: "2018",
      cycle: "Tier 2 ",
    }, 
    {
      title: "Concreting of Access road",
      kcGrant:968024.80,
      lcc:350975.2,
      total:1319000.00,
      dateCompleted: "November 21, 2023",
    },
    {
      title: "Improvement of Access Road",
      kcGrant: 484012.40,
      lcc: 603387.60,
      total: 1087400.00,
      dateCompleted: "2024",
    },
],
Malangabang: [
    {
      title: "Construction of 1 CL School Building",
      kcGrant: 444847.00,
      lcc: 123841.11,
      total: 568688.11,
      dateCompleted: "October 18, 2007",
      cycle: "Year 3",
    },
    {
      title: "Construction of Mini Market",
      kcGrant: 730992.28,
      lcc: 184318.22,
      total: 915310.50,
      dateCompleted: "2010",
      cycle: "MT2",
    },
    {
      title: "Enchancing Quality Education Through Community Managed Construction of 1 Unit 2 CL Building in Crisanto M. Ciriaco Memorial School",
      kcGrant: 932102.37,
      lcc: 231515.63,
      total: 1163618.00,
      dateCompleted: "2014-2016",
      cycle: "NCDDP",
    },
    {
      title: "Providing Security and Safety to the Community Through Community Managed Installation of Solar Street Lights",
      kcGrant: 920265.00,
      lcc: 169435.00,
      total: 1089700.00,
      dateCompleted: "2018",
      cycle: "Tier 2",
    },
    {
      title: "Construction of 1 Unit 2 Classroom School Building",
      kcGrant:1633947.90,
      lcc:966052.10,
      total: 2600000.00,
      dateCompleted: "October 26, 2023",
    },
    {
      title: "Construction of 1 unit Classroom School Building",
      kcGrant: 816973.94,
      lcc: 603326.06,
      total: 1420300.00,
      dateCompleted: "2024",
    },
],
Macatunao: [
    {
      title: "Water System Level II",
      kcGrant:338160.00,
      lcc: 221115.12,
      total: 559275.12,
      dateCompleted: "March 15, 2004",
      cycle: "Year 1",
    },
    {
      title: "Day Care Center",
      kcGrant:588690.50,
      lcc: 48036.84,
      total: 636727.34,
      dateCompleted: "November 1, 2005",
      cycle: "Year 2",
    },
    {
      title: "Construction of 1 meter Reinforced Concrete Road",
      kcGrant:506508.00,
      lcc: 177882.79,
      total: 684390.79,
      dateCompleted: "August 31, 2006",
      cycle: "Year 3",
    },
    {
      title: "Improvement of brgy. Trail",
      kcGrant:517412.22,
      lcc: 223820.16,
      total: 741232.38,
      dateCompleted: "August 03, 2009",
      cycle: "MT",
    },
    {
      title: "Barangay Trail with Foot bridge",
      kcGrant:760538.00,
      lcc: 398051.34,
      total: 1158589.34,
      dateCompleted: "2010",
      cycle: "MT 2",
    },
    {
      title: "Ensuring Safety Of Access Through Community Managed Repair And Inprovement Of foot Trail Shoreline Protection  ",
      kcGrant:932102.37,
      lcc: 231515.63,
      total: 1163618.00,
      dateCompleted: "2014-2016",
      cycle: "NCDDP",
    },
    {
      title: "Providing Safety And Comfortable Way Through Community-Management Of Pathway ",
      kcGrant:1132360.00,
      lcc: 271640.00,
      total: 1404000.00,
      dateCompleted: "2018",
      cycle: "TEAR 2",
    },
    {
      title: "Construction of Pathway with Slope Protection",
      kcGrant:780074.00,
      lcc:204426.00,
      total: 984500.00,
      dateCompleted: "September 18, 2023",
    },
    {
      title: "Construction of Pathway with slope Protection",
      kcGrant:390037.00,
      lcc: 323363.00,
      total:713400.00,
      dateCompleted: "",
    },
  ],
  Maliogliog: [
    {
      title: "Footbridge With Footwalk",
      kcGrant:448625.00,
      lcc: 184611.26,
      total: 633236.26,
      dateCompleted: "January 22,2004",
      cycle: "Year 1",
    },
     {
      title: "Water System level 2",
      kcGrant:886520.00,
      lcc: 131140.00,
      total: 1017660.00,
      dateCompleted: "September 30,2005",
      cycle: "Year 2",
    },
     {
      title: "Construction 1 CL Building",
      kcGrant:542771.61,
      lcc: 126275.04,
      total: 669046.65,
      dateCompleted: "2010",
      cycle: "MT2",
    },
    {
      title: "Providing Security and Safety through Community Managed Installation of Solar Lights",
      kcGrant: 540340.00,
      lcc: 157660.00,
      total: 698000.00,
      dateCompleted: "2018",
      cycle: "Tier 2",
    },
    {
      title: "Providing Safety through Community Managed Construction of Shoreline Protection",
      kcGrant: 504812.35,
      lcc: 145887.65,
      total: 650700.00,
      dateCompleted: "2014-2016",
      cycle: "Tier 2",
    },
    {
      title: "Construction of Pathway with Slope Protection",
      kcGrant:246669.94,
      lcc:483330.06,
      total: 730000.00,
      dateCompleted: "October 26, 2023",
    },
    {
      title: "Construction of Slope Protectionwith Pathway",
      kcGrant: 123334.97,
      lcc: 403665.03,
      total: 527000.00,
      dateCompleted: "2024",
    },
  ],
Niño: [
    {
      title: "DayCare Center",
      kcGrant:222880.00,
      lcc: 188362.48,
      total: 411242.48,
      dateCompleted: "March 09, 2004",
      cycle: "Year 1",
    },
    {
      title: "Road Rehabilitation",
      kcGrant: 971650.00,
      lcc: 77147.35,
      total: 1048797.35,
      dateCompleted: "Oct 30, 2005",
      cycle: "Year 2",
    },
     {
      title: "Construction of Brgy. Health Station",
      kcGrant: 535138.77,
      lcc: 55234.08,
      total: 1048797.35,
      dateCompleted: "June 30, 2006 ",
      cycle: "Year 2",
    },
    {
      title: "Construction of 1 CL Building",
      kcGrant: 441151.08,
      lcc: 206465.29,
      total: 647616.37,
      dateCompleted: "2010 ",
      cycle: "MT 2",
    },
    {
      title: "Improve Income Generation through Community Managed Rehabilitation of Solar Dryer",
      kcGrant: 286826.31,
      lcc: 207298.69,
      total: 494125.00,
      dateCompleted: "2014-2016",
      cycle: "NCDDP",
    },
    {
      title: "Improving Quality of Education through Community Managed Construction of Home Economics Building",
      kcGrant: 884480.00,
      lcc: 315520.00,
      total: 1200000.00,
      dateCompleted: "2018",
      cycle: "Tier 2",
    },
    {
      title: "Purchasing and Installation of Land Mobile radio System",
      kcGrant:159463.76,
      lcc:422536.24,
      total: 582000.00,
      dateCompleted: "August 18, 2023",
    },
    {
      title: "Construction of Solar Dryer",
      kcGrant: 79731.88,
      lcc: 318368.12,
      total: 398100.00,
      dateCompleted: "2024",
    },
  ],
  Nipa: [
    {
      title: "Providing Quality Early Childhood Development through Community managed Construction of DayCare Center with Complete Amenities and Retaining Wall",
      kcGrant: 784699.17,
      lcc: 68500.83,
      total: 853200.00,
      dateCompleted: "2014-2016",
      cycle: "NCDDP",
    },
    {
      title: "Water System Level II",
      kcGrant: 381180.00,
      lcc: 312484.76,
      total: 693664.76,
      dateCompleted: "May 11, 2004",
      cycle: "Year 1",
    },
  {
      title: "Construction of 1 CL School Building",
      kcGrant: 480332.14,
      lcc: 98236.36,
      total: 578568.50,
      dateCompleted: "June 30, 2009",
      cycle: "MT",
    },
    {
      title: "Artificial Reef",
      kcGrant: 389069.75,
      lcc: 82992.30,
      total: 472062.05,
      dateCompleted: "2010",
      cycle: "MT 2 ",
    },
    {
      title: "Construction of One Unit barangay Health Station",
      kcGrant:610335.14,
      lcc:1356664.86,
      total: 1967000.00,
      dateCompleted: "October 26, 2023",
    },
    {
      title: "Improvement of Access Road",
      kcGrant: 305167.57,
      lcc: 603332.43,
      total: 908500.00,
      dateCompleted: "2024",
    },
  ],
  Plandico: [
    {
      title: "Daycare Center (2 Units)",
      kcGrant:450600.00,
      lcc: 306604.79,
      total: 757204.79,
      dateCompleted: "April 16, 2004",
      cycle: "Year 1 ",
    },
    {
      title: "Construction of Water System Level I and II",
      kcGrant:145421.73,
      lcc: 361642.78,
      total: 507064.51,
      dateCompleted: "",
      cycle: "Year 3 ",
    },
    {
      title: "Construction of Health Center",
      kcGrant:658803.69,
      lcc: 183052.56,
      total: 841856.25,
      dateCompleted: "2010",
      cycle: "MT 2 ",
    },
    {
      title: "Enchancing Access and Mobility through Community managed Improvement of Farm to Market Road",
      kcGrant:516900.21,
      lcc: 294741.79,
      total: 811642.00,
      dateCompleted: "2014-2016",
      cycle: "NCDDP ",
    },
    {
      title: "Construction of Slope Protection",
      kcGrant:323782.74,
      lcc:343217.26,
      total: 667000.00,
      dateCompleted: "August 19, 2023",
    },
    {
      title: "Improvement of Access Road",
      kcGrant: 161891.37,
      lcc:603208.63,
      total: 765100.00,
      dateCompleted: "2024",
    },
  ],






};

const BarangayProjects = () => {
  const { barangay } = useParams();

  const projects = sampleProjects[barangay] || [];

  return (
   <div style={{ marginTop: "100px", padding: "20px" }}>
 <h2
  style={{
    textAlign: "center",
    fontSize: "38px",
    fontWeight: "700",
    color: "#1f2937",
    marginBottom: "10px",
  }}
>
  📊 {barangay} Projects
</h2>

<p
  style={{
    textAlign: "center",  
    color: "#6b7280",
    marginBottom: "30px",
  }}
>
  KALAHI-CIDSS Accomplishment and Project Monitoring Dashboard
</p>  

  {projects.length === 0 ? (
    <p style={{ textAlign: "center" }}>
      No projects found for this barangay.
    </p>
  ) : (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)", // 👈 3 per row
        gap: "20px",
        marginTop: "20px",
      }}
    >
      {projects.map((proj, index) => (
  <div
  key={index}
  style={{
    background: "#fff",
    borderRadius: "18px",
    overflow: "hidden",
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
    border: "1px solid #e5e7eb",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    }}
    onMouseOver={(e) => {
      e.currentTarget.style.transform = "translateY(-5px)";
      e.currentTarget.style.boxShadow =
        "0 15px 30px rgba(23,131,203,0.20)";
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow =
        "0 6px 18px rgba(0,0,0,0.08)";
    }}
  >
    {/* Header */}
    <div
  style={{
    background: "linear-gradient(90deg, #1783cb, #00897b)",
    color: "#fff",
    padding: "18px",
    minHeight: "125px", // fixed header height
    display: "flex",
    alignItems: "flex-start",
  }}
>
  <h3
    style={{
      margin: 0,
      fontSize: "18px",
      fontWeight: "700",
      lineHeight: "1.4",
    }}
  >
    {proj.title}
  </h3>
</div>

    {/* Body */}
    <div style={{ padding: "20px" }}>
      <div style={{ marginBottom: "12px" }}>
        <span style={{ color: "#6b7280" }}>Cycle</span>
        <div style={{ fontWeight: "600" }}>
          {proj.cycle || "N/A"}
        </div>
      </div>

      <div style={{ marginBottom: "12px" }}>
        <span style={{ color: "#6b7280" }}>KC Grant</span>
        <div
          style={{
            color: "#1783cb",
            fontWeight: "700",
            fontSize: "18px",
          }}
        >
          ₱{proj.kcGrant.toLocaleString()}
        </div>
      </div>

      <div style={{ marginBottom: "12px" }}>
        <span style={{ color: "#6b7280" }}>LCC Counterpart</span>
        <div
          style={{
            color: "#00897b",
            fontWeight: "700",
            fontSize: "18px",
          }}
        >
          ₱{proj.lcc.toLocaleString()}
        </div>
      </div>

      <div style={{ marginBottom: "12px" }}>
        <span style={{ color: "#6b7280" }}>Total Project Cost</span>
        <div
          style={{
            color: "#111827",
            fontWeight: "800",
            fontSize: "22px",
          }}
        >
          ₱{proj.total.toLocaleString()}
        </div>
      </div>

      <hr />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <span
          style={{
            background: "#ecfdf5",
            color: "#059669",
            padding: "6px 12px",
            borderRadius: "999px",
            fontSize: "12px",
            fontWeight: "600",
          }}
        >
          Completed
        </span>

        <span
          style={{
            color: "#6b7280",
            fontSize: "13px",
          }}
        >
          {proj.dateCompleted || "N/A"}
        </span>
      </div>
    </div>
  </div>
))}
    </div>
  )}
</div>
  );
};

export default BarangayProjects;