---
site:
  hide_title_block: true
  hide_outline: true
  hide_toc: true
---

% Hero block
+++ {"class": "col-page-inset hero-block"}

_Exploring Discrete Global Grid Systems (DGGS) for creating a unified, standardized data infrastructure._

% Technology block
+++ {"class": "col-page-inset content-block"}

:::{figure} static/grid4earth_logo.png
:width: 50%
:alt: GRID4EARTH Logo
:::

:::::::{grid} 1 1 2 2

:::{block-title}

# GRID4EARTH

## ESA Digital Twin Earth (DTE) Framework: Common DGGS for DestinE and Copernicus Sentinel Data

:::

::::::{div}
:name: tool-grid

:::::{grid} 2 2 3 3

::::{card}
:link: https://www.ifremer.fr/
:::{image} static/IFREMER.png
:class: tool-badge
:::
::::

::::{card}
:link: https://www.cnrs.fr/
:::{image} static/CNRS.png
:class: tool-badge
:::
::::

::::{card}
:link: https://www.simula.no
:::{image} static/SRL.png
:class: tool-badge
:::
::::

::::{card}
:link: https://ut.ee/en
:::{image} static/Tartu.png
:class: tool-badge
:::
::::

::::{card}
::::

::::{card}
:link: https://github.com/benbovy
:::{image} static/georode_logo.png
:class: tool-badge
:::
::::

:::::
::::::

:::::::

## Project Overview

Within the ESA Digital Twin Earth (DTE) Framework, the **GRID4EARTH** project focuses on creating a unified, standardized data infrastructure based on **Discrete Global Grid Systems (DGGS)**. This framework supports seamless integration, visualization, and analysis of diverse Earth Observation (EO) datasets. By addressing the increasing complexity and volume of EO data—especially from Copernicus missions and the Destination Earth (DestinE) program—this project promotes interoperability, scalability, and efficient data usage.

## Background

With the rapid growth of EO data from Copernicus and climate-relevant datasets from DestinE, there is an urgent need for standardized, interoperable data frameworks. Currently, the landscape is fragmented and not optimised—characterized by a range of incompatible data structures, spatial references, and storage formats.

This activity addresses these challenges through the adoption of:

- **Discrete Global Grid Systems (DGGS)**, specifically the **HEALPix** hierarchical equal-area grid. The HEALPix (Hierarchical, Equal Area, and isoLatitude Pixelisation) representation provides a hierarchical tree structure suited for multi-resolution applications.
- **Cloud-optimized data formats**, with a focus on **Zarr V3**.

These technologies enable multi-resolution capabilities, improve cloud compatibility, and reduce complexity in integrating data from multiple sources and missions. The **HEALPix** representation has already been adopted in DestinE's Climate Digital Twin, making it a logical foundation for broader EO data harmonization. The **Zarr format** has already been adopted in the **EOPF format**, particularly within the Sentinel data re-engineering efforts. For more information, please refer to the [EOPF website](https://eopf.copernicus.eu).

## Objectives

This project aims to design, implement, and document an end-to-end operational pipeline that supports the adoption of a DGGS-based data format for EO and climate datasets. It will validate this format, demonstrate its applicability to legacy data such as Sentinel and DestinE products, and provide tools for data transformation, visualization, and integration into existing services like DestinE's DeltaTwin. The approach emphasizes performance, interoperability, and alignment with cloud-optimized technologies such as Zarr.

```{admonition} Key Innovation
:class: tip

The HEALPix representation has already been adopted in DestinE's Climate Digital Twin, making it a logical foundation for broader EO data harmonization. The Zarr format has already been adopted in the EOPF format within Sentinel data re-engineering efforts.
```

% Footer block
+++ {"class": "col-page-inset content-block"}
::::{block-title}

**Contact and Repository**

For further details, updates, or contributions, please visit the [EOPF-DGGS GitHub repository](https://github.com/eopf-dggs).

**Funded by:** [The European Space Agency](https://esa.int)
